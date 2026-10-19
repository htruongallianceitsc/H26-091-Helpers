/** Kiểm tra username 3–32 ký tự ASCII, bắt đầu bằng chữ, cho phép số và dấu gạch dưới */
export function isUsername(value) {
  return typeof value === 'string' && /^[A-Za-z][A-Za-z0-9_]{2,31}$/.test(value);
}
