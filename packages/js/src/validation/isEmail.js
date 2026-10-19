/**
 * Kiểm tra email theo quy tắc thực dụng, không cố mô phỏng toàn bộ RFC 5322.
 * @param {string} value
 * @returns {boolean}
 */
export function isEmail(value) {
  if (typeof value !== 'string' || value.length > 254) return false;
  const at = value.lastIndexOf('@');
  if (at <= 0 || at === value.length - 1) return false;
  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  if (local.length > 64 || domain.includes('..')) return false;
  return /^[^\s@]+$/.test(local) && /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/.test(domain);
}
