/**
 * Cắt chuỗi theo độ dài tối đa và thêm hậu tố khi cần.
 * @param {string} text
 * @param {number} maxLength
 * @param {string} [suffix='...']
 * @returns {string}
 */
export function truncate(text, maxLength, suffix = '...') {
  if (text == null) return '';
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new RangeError('maxLength phải là số nguyên >= 0');
  }
  const value = String(text);
  if (value.length <= maxLength) return value;
  if (maxLength <= suffix.length) return suffix.slice(0, maxLength);
  return value.slice(0, maxLength - suffix.length) + suffix;
}
