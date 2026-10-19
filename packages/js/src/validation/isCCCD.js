/** Kiểm tra định dạng CCCD 12 chữ số, không xác minh cấp phát */
export function isCCCD(value) {
  return typeof value === 'string' && /^[0-9]{12}$/.test(value);
}
