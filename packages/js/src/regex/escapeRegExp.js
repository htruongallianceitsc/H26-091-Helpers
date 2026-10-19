/** Escape ký tự đặc biệt để tìm kiếm chuỗi literal an toàn */
export function escapeRegExp(value) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
