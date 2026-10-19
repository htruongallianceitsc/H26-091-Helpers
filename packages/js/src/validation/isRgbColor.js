/** Kiểm tra rgb() và rgba() với kênh nguyên 0–255 và alpha 0–1 */
export function isRgbColor(value) {
  if (typeof value !== 'string') return false;
  const m = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0(?:\.\d+)?|1(?:\.0+)?))?\s*\)$/.exec(value);
  if (!m || m.slice(1,4).some(v => Number(v) > 255)) return false;
  return value.startsWith('rgba(') === (m[4] !== undefined);
}
