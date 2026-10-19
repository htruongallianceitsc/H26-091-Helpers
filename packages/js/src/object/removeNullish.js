/**
 * Bỏ field có giá trị null/undefined ở cấp hiện tại.
 * @param {Record<string, any>} object
 * @returns {Record<string, any>}
 */
export function removeNullish(object) {
  if (object == null || typeof object !== 'object' || Array.isArray(object)) throw new TypeError('object phải là plain object');
  return Object.fromEntries(Object.entries(object).filter(([, value]) => value !== null && value !== undefined));
}
