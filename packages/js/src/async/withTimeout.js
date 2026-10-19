/** Promise timeout. Timeout does not cancel underlying work unless it honors the supplied signal. */
export function withTimeout(operation, timeoutMs, options = {}) {
  if (!Number.isFinite(timeoutMs) || timeoutMs < 0) throw new RangeError('timeoutMs không hợp lệ');
  const { signal } = options;
  return new Promise((resolve, reject) => {
    let settled = false;
    const abortError = () => signal?.reason ?? new DOMException('Aborted', 'AbortError');
    const cleanup = () => { clearTimeout(timer); signal?.removeEventListener('abort', onAbort); };
    const finish = (fn, value) => { if (settled) return; settled = true; cleanup(); fn(value); };
    const onAbort = () => finish(reject, abortError());
    const timer = setTimeout(() => finish(reject, new DOMException('Timed out', 'TimeoutError')), timeoutMs);
    if (signal?.aborted) { onAbort(); return; }
    signal?.addEventListener('abort', onAbort, { once: true });
    Promise.resolve().then(() => typeof operation === 'function' ? operation() : operation).then(v => finish(resolve, v), e => finish(reject, e));
  });
}
