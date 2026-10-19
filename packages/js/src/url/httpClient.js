import { AppError } from '../error/appError.js';
import { retry } from '../async/retry.js';
/** Factory wrapping fetch with timeout, cancellation, JSON, and safe retries. No automatic retry for unsafe HTTP methods. */
export function httpClient({ baseUrl = '', headers = {}, timeoutMs = 10000, retries = 0, fetchImpl = globalThis.fetch } = {}) {
  if (typeof fetchImpl !== 'function') throw new TypeError('fetch không khả dụng');
  if (!Number.isFinite(timeoutMs) || timeoutMs < 0) throw new RangeError('timeoutMs không hợp lệ');
  if (!Number.isInteger(retries) || retries < 0) throw new RangeError('retries không hợp lệ');
  return async function request(path, { method = 'GET', headers: customHeaders = {}, body, signal, timeoutMs: requestTimeout = timeoutMs, retries: requestRetries = retries, responseType = 'json' } = {}) {
    const verb = method.toUpperCase();
    const allowedRetry = ['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE'].includes(verb);
    const url = baseUrl ? new URL(path, baseUrl.endsWith('/') ? baseUrl : baseUrl + '/').toString() : path;
    return retry(async () => {
      const controller = new AbortController();
      let timeoutHit = false;
      const onAbort = () => controller.abort(signal.reason);
      if (signal?.aborted) controller.abort(signal.reason);
      else signal?.addEventListener('abort', onAbort, {once:true});
      const timer = setTimeout(() => { timeoutHit = true; controller.abort(); }, requestTimeout);
      try {
        const merged = new Headers(headers);
        for (const [key,value] of Object.entries(customHeaders)) merged.set(key, value);
        const json = body != null && typeof body === 'object' && !(body instanceof FormData) && !(body instanceof Blob) && !(body instanceof URLSearchParams) && !(body instanceof ArrayBuffer);
        if (json && !merged.has('Content-Type')) merged.set('Content-Type', 'application/json');
        const result = await fetchImpl(url, { method: verb, headers: merged, body: json ? JSON.stringify(body) : body, signal: controller.signal });
        if (!result.ok) throw new AppError(`HTTP ${result.status}`, {code:'HTTP_ERROR', status:result.status, retryable:[408,429,500,502,503,504].includes(result.status)});
        if (result.status === 204 || verb === 'HEAD') return null;
        if (responseType === 'text') return result.text();
        if (responseType === 'raw') return result;
        if (responseType !== 'json') throw new TypeError('responseType không hợp lệ');
        try { return await result.json(); }
        catch (cause) { throw new AppError('Invalid JSON response', { code:'PARSE_ERROR', cause }); }
      } catch (cause) {
        if (cause instanceof AppError) throw cause;
        if (timeoutHit) throw new AppError('Request timed out', {code:'TIMEOUT', retryable:true, cause});
        if (signal?.aborted) throw new AppError('Request aborted', {code:'ABORTED', cause});
        throw new AppError('Network request failed', {code:'NETWORK_ERROR', retryable:true, cause});
      } finally { clearTimeout(timer); signal?.removeEventListener('abort', onAbort); }
    }, { attempts: allowedRetry ? requestRetries + 1 : 1, delayMs: 150, signal, shouldRetry: error => error?.retryable === true });
  };
}
