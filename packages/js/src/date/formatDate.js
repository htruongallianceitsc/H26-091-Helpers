/**
 * Định dạng ngày theo token YYYY, MM, DD, HH, mm, ss.
 * Chuỗi YYYY-MM-DD được hiểu là ngày local để tránh lệch ngày do UTC parsing.
 * @param {Date|string|number} input
 * @param {string} [pattern='DD/MM/YYYY']
 * @returns {string}
 */
export function formatDate(input, pattern = 'DD/MM/YYYY') {
  const date = toDate(input);
  if (Number.isNaN(date.getTime())) throw new RangeError('Ngày không hợp lệ');
  const tokens = {
    YYYY: String(date.getFullYear()),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  return pattern.replace(/YYYY|MM|DD|HH|mm|ss/g, token => tokens[token]);
}

function toDate(input) {
  if (input instanceof Date) return new Date(input.getTime());
  if (typeof input === 'string') {
    const match = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  return new Date(input);
}

function pad(value) { return String(value).padStart(2, '0'); }
