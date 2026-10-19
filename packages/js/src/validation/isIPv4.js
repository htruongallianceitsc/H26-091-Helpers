/** Kiểm tra IPv4 dotted-decimal, không chấp nhận leading zero */
export function isIPv4(value) {
  if (typeof value !== 'string') return false;
  const parts = value.split('.');
  return parts.length === 4 && parts.every(p => /^(?:0|[1-9]\d{0,2})$/.test(p) && Number(p) <= 255);
}
