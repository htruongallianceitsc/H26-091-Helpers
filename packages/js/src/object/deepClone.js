/**
 * Sao chép sâu value. Ưu tiên structuredClone khi môi trường hỗ trợ.
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function deepClone(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return cloneFallback(value, new WeakMap());
}

function cloneFallback(value, seen) {
  if (value === null || typeof value !== 'object') return value;
  if (seen.has(value)) return seen.get(value);
  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);
  if (Array.isArray(value)) {
    const out = [];
    seen.set(value, out);
    for (const item of value) out.push(cloneFallback(item, seen));
    return out;
  }
  const out = {};
  seen.set(value, out);
  for (const [key, item] of Object.entries(value)) out[key] = cloneFallback(item, seen);
  return out;
}
