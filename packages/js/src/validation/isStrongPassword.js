/** Kiểm tra mật khẩu có ít nhất 8 ký tự, chữ hoa, chữ thường, số và ký tự đặc biệt */
export function isStrongPassword(value) {
  return typeof value === 'string' && value.length >= 8 && /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && /[^A-Za-z0-9\s]/.test(value) && !/\s/.test(value);
}
