/** Nối danh sách bằng dấu phân cách phù hợp ngôn ngữ */
export function formatList(values, { locale = 'vi-VN', style = 'long', type = 'conjunction' } = {}) {
  if (!Array.isArray(values) || !values.every(x => typeof x === 'string')) throw new TypeError('Expected array of strings');
  return new Intl.ListFormat(locale, { style, type }).format(values);
}
