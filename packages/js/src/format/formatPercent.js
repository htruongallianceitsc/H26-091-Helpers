/** Định dạng tỷ lệ thành phần trăm theo locale */
export function formatPercent(value, { locale = 'vi-VN', digits = 2, fromRatio = true } = {}) {
  if (!Number.isFinite(value) || !Number.isInteger(digits) || digits < 0 || digits > 20) throw new RangeError('Invalid value or digits');
  return new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: digits }).format(fromRatio ? value : value / 100);
}
