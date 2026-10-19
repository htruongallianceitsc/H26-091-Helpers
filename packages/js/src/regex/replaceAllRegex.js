/** Thay thế chuỗi theo regex, mặc định thay toàn bộ */
export function replaceAllRegex(value, pattern, replacement) {
  if (typeof value !== 'string' || !(pattern instanceof RegExp) || !(typeof replacement === 'string' || typeof replacement === 'function')) throw new TypeError('Invalid arguments');
  const regex = new RegExp(pattern.source,pattern.flags.includes('g') ? pattern.flags : pattern.flags+'g');
  return value.replace(regex,replacement);
}
/** Pattern phải đến từ mã tin cậy. */
