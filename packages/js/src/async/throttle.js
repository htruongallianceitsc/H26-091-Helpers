/**
 * Giới hạn hàm chạy tối đa một lần trong mỗi wait ms, có trailing call.
 * @template {(...args: any[]) => any} T
 * @param {T} fn
 * @param {number} wait
 * @returns {T & {cancel: () => void}}
 */
export function throttle(fn, wait) {
  if (typeof fn !== 'function') throw new TypeError('fn phải là hàm');
  if (!Number.isFinite(wait) || wait < 0) throw new RangeError('wait phải >= 0');
  let lastCall = -Infinity;
  let timer = null;
  let trailingArgs;
  let trailingThis;

  function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCall);
    if (remaining <= 0) {
      if (timer) clearTimeout(timer);
      timer = null;
      lastCall = now;
      return fn.apply(this, args);
    }
    trailingArgs = args;
    trailingThis = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        lastCall = Date.now();
        fn.apply(trailingThis, trailingArgs);
        trailingArgs = trailingThis = undefined;
      }, remaining);
    }
  }

  throttled.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    trailingArgs = trailingThis = undefined;
  };
  return throttled;
}
