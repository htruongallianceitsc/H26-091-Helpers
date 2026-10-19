/** Đệm số bằng số 0 theo độ dài cố định */
export function padNumber(value, width = 2) {
  if (!Number.isSafeInteger(value) || !Number.isInteger(width) || width < 1 || width > 100) throw new RangeError('Invalid value/width');
  return `${value < 0 ? '-' : ''}${String(Math.abs(value)).padStart(width,'0')}`;
}
