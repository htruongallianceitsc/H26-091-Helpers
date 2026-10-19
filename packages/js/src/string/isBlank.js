/**
 * Kiểm tra null, undefined, chuỗi rỗng hoặc chỉ có khoảng trắng.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBlank(value) {
  return value == null || (typeof value === 'string' && value.trim().length === 0);
}
