/**
 * Bỏ dấu Unicode, có xử lý riêng chữ đ/Đ tiếng Việt.
 * @param {string} text
 * @returns {string}
 */
export function removeAccents(text) {
  if (text == null) return '';
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
