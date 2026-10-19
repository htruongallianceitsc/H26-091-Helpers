/**
 * Lấy một tập key từ object.
 * @template T
 * @param {T} object
 * @param {(keyof T)[]} keys
 * @returns {Partial<T>}
 */
export function pick(object, keys) {
  if (object == null || typeof object !== 'object') throw new TypeError('object phải là object');
  const out = {};
  for (const key of keys) if (Object.prototype.hasOwnProperty.call(object, key)) out[key] = object[key];
  return out;
}
