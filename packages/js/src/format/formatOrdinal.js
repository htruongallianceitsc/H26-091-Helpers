/** Định dạng số thứ tự theo locale (ví dụ 1st) */
export function formatOrdinal(value, { locale = 'en-US' } = {}) {
  if (!Number.isSafeInteger(value)) throw new TypeError('Expected integer');
  if (locale !== 'en-US' && locale !== 'en-GB') throw new RangeError('Supported locales: en-US, en-GB');
  const abs = Math.abs(value), mod100 = abs % 100;
  const suffix = mod100 >= 11 && mod100 <= 13 ? 'th' : ({1:'st',2:'nd',3:'rd'}[abs % 10] || 'th');
  return `${value}${suffix}`;
}
