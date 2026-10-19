/** Kiểm tra match regex với flags an toàn, tránh stateful global */
export function isMatch(value, pattern, flags = '') {
  if (typeof value !== 'string' || !(typeof pattern === 'string' || pattern instanceof RegExp)) throw new TypeError('Invalid arguments');
  if (typeof flags !== 'string') throw new TypeError('Invalid flags');
  const source = pattern instanceof RegExp ? pattern.source : pattern;
  const activeFlags = flags || (pattern instanceof RegExp ? pattern.flags : '');
  return new RegExp(source, activeFlags.replace(/[gy]/g,'')).test(value);
}
/** Không sử dụng với regex từ nguồn không tin cậy: JS không có timeout regex. */
