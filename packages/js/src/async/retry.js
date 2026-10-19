import { sleep } from './sleep.js';

/**
 * Thử lại async function với exponential backoff.
 * @template T
 * @param {(attempt: number) => Promise<T>} fn
 * @param {{attempts?: number, delayMs?: number, factor?: number, shouldRetry?: (error: unknown, attempt: number) => boolean, signal?: AbortSignal}} [options]
 * @returns {Promise<T>}
 */
export async function retry(fn, options = {}) {
  const { attempts = 3, delayMs = 200, factor = 2, shouldRetry = () => true, signal } = options;
  if (typeof fn !== 'function') throw new TypeError('fn phải là hàm');
  if (!Number.isInteger(attempts) || attempts < 1) throw new RangeError('attempts phải >= 1');
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    if (signal?.aborted) throw signal.reason ?? new DOMException('Aborted', 'AbortError');
    try {
      return await fn(attempt);
    } catch (error) {
      lastError = error;
      if (attempt >= attempts || !shouldRetry(error, attempt)) throw error;
      const wait = delayMs * Math.pow(factor, attempt - 1);
      if (wait > 0) await sleep(wait, signal);
    }
  }
  throw lastError;
}
