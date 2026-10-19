/** Kiểm tra mã bưu chính Việt Nam 5 chữ số theo cấu trúc, không tra cứu danh mục */
export function isVietnamPostalCode(value) {
  return typeof value === 'string' && /^\d{5}$/.test(value);
}
