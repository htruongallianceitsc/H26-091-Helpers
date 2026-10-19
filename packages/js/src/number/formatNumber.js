/**
 * Định dạng số theo locale.
 * @param {number} value
 * @param {{locale?: string, minimumFractionDigits?: number, maximumFractionDigits?: number}} [options]
 * @returns {string}
 */
export function formatNumber(value, options = {}) {
  const { locale = 'vi-VN', ...intlOptions } = options;
  if (!Number.isFinite(value)) throw new TypeError('value phải là số hữu hạn');
  return new Intl.NumberFormat(locale, intlOptions).format(value);
}
