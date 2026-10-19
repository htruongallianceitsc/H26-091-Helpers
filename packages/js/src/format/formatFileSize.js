/** Định dạng dung lượng theo hệ 1024 hoặc 1000 */
export function formatFileSize(bytes, { base = 1024, locale = 'en-US', digits = 2 } = {}) {
  if (!Number.isFinite(bytes) || bytes < 0 || ![1000, 1024].includes(base)) throw new RangeError('Invalid bytes/base');
  const units = base === 1024 ? ['B','KiB','MiB','GiB','TiB','PiB'] : ['B','kB','MB','GB','TB','PB'];
  let value = bytes, unit = 0;
  while (value >= base && unit < units.length - 1) { value /= base; unit++; }
  return `${new Intl.NumberFormat(locale,{maximumFractionDigits:digits}).format(value)} ${units[unit]}`;
}
