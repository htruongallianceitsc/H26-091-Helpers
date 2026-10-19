/** Định dạng số rút gọn 1K, 1M theo locale */
export function formatCompactNumber(value, { locale = 'en-US', digits = 1 } = {}) {
  if (!Number.isFinite(value)) throw new TypeError('Expected finite number');
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: digits }).format(value);
}
