/**
 * Định dạng số tiền bằng Intl.NumberFormat.
 * @param {number} value
 * @param {{currency?: string, locale?: string, minimumFractionDigits?: number, maximumFractionDigits?: number}} [options]
 * @returns {string}
 */
export function formatCurrency(value, options = {}) {
  const {
    currency = 'VND',
    locale = 'vi-VN',
    minimumFractionDigits,
    maximumFractionDigits
  } = options;
  if (!Number.isFinite(value)) throw new TypeError('value phải là số hữu hạn');
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency, minimumFractionDigits, maximumFractionDigits
  }).format(value);
}
