/** Đọc thuộc tính theo đường dẫn dạng dấu chấm. */
export function get(object, path, fallback = undefined) {
  if (typeof path !== 'string' && !Array.isArray(path)) throw new TypeError('path không hợp lệ');
  const keys = Array.isArray(path) ? path : path.split('.').filter(Boolean);
  let value = object;
  for (const key of keys) { if (value == null || !Object.hasOwn(Object(value),key)) return fallback; value=value[key]; }
  return value === undefined ? fallback : value;
}
