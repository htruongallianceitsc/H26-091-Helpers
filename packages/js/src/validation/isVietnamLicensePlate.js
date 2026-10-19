/** Kiểm tra định dạng biển xe Việt Nam phổ biến, không tra cứu biển số thực tế */
export function isVietnamLicensePlate(value) {
  if (typeof value !== 'string') return false;
  const s = value.toUpperCase().replace(/[\s.-]/g, '');
  return /^(?:\d{2}[A-Z]{1,2}\d{4,5}|\d{2}[A-Z]\d{6})$/.test(s);
}
