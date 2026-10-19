/**
 * Bỏ một tập key khỏi object và trả object mới.
 * @template T
 * @param {T} object
 * @param {(keyof T)[]} keys
 * @returns {Partial<T>}
 */
export function omit(object, keys) {
  if (object == null || typeof object !== 'object') throw new TypeError('object phải là object');
  const excluded = new Set(keys);
  return Object.fromEntries(Object.entries(object).filter(([key]) => !excluded.has(key)));
}
