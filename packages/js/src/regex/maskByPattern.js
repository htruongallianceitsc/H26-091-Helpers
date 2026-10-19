/** Che chuỗi bằng regex với nhóm capture định nghĩa trước */
export function maskByPattern(value, pattern, replacement = '$1****$2') {
  if (typeof value !== 'string' || !(pattern instanceof RegExp) || typeof replacement !== 'string') throw new TypeError('Invalid arguments');
  return value.replace(new RegExp(pattern.source,pattern.flags), replacement);
}
/** Chỉ dùng pattern tin cậy, tránh hiển thị PII ngoài ý muốn. */
