/** Kiểm tra giờ 24h HH:mm hoặc HH:mm:ss */
export function isTime24h(value) {
  return typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/.test(value);
}
