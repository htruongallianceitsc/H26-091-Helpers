/** Chuẩn hóa mọi whitespace Unicode về dấu cách đơn */
export function normalizeWhitespace(value, { preserveNewlines = false } = {}) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  if (!preserveNewlines) return value.replace(/\s+/gu,' ').trim();
  return value.replace(/\r\n?/g,'\n').split('\n').map(x=>x.replace(/[^\S\n]+/gu,' ').trim()).join('\n').replace(/\n{3,}/g,'\n\n').trim();
}
