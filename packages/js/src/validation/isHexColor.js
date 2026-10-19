/** Kiểm tra mã màu #RGB, #RGBA, #RRGGBB, #RRGGBBAA */
export function isHexColor(value) {
  return typeof value === 'string' && /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value);
}
