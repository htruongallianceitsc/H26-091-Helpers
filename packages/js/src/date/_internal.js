/** Chuyển input thành Date hợp lệ; ngày ISO không có giờ là local calendar date. */
export function asDate(input) {
  let date;
  if (input instanceof Date) date = new Date(input.getTime());
  else if (typeof input === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
    const [y,m,d] = input.split('-').map(Number);
    date = new Date(0); date.setFullYear(y,m-1,d); date.setHours(0,0,0,0);
    if (date.getFullYear() !== y || date.getMonth() !== m-1 || date.getDate() !== d) throw new RangeError('Ngày không hợp lệ');
  } else date = new Date(input);
  if (!Number.isFinite(date.getTime())) throw new RangeError('Ngày không hợp lệ');
  return date;
}
export function finiteNumber(n, label = 'Giá trị') { if (!Number.isFinite(n)) throw new RangeError(`${label} phải là số hữu hạn`); return n; }
export function dayNumber(date, utc=false) { return Math.floor(Date.UTC(utc?date.getUTCFullYear():date.getFullYear(), utc?date.getUTCMonth():date.getMonth(), utc?date.getUTCDate():date.getDate()) / 86400000); }
