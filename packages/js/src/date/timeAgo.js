/**
 * Trả mô tả thời gian tương đối tiếng Việt.
 * @param {Date|string|number} input
 * @param {Date|string|number} [now=new Date()]
 * @returns {string}
 */
export function timeAgo(input, now = new Date()) {
  const date = new Date(input);
  const current = new Date(now);
  if (Number.isNaN(date.getTime()) || Number.isNaN(current.getTime())) throw new RangeError('Ngày không hợp lệ');
  const diffSeconds = Math.round((date.getTime() - current.getTime()) / 1000);
  const abs = Math.abs(diffSeconds);
  if (abs < 10) return 'vừa xong';
  const units = [
    ['năm', 365 * 24 * 3600],
    ['tháng', 30 * 24 * 3600],
    ['ngày', 24 * 3600],
    ['giờ', 3600],
    ['phút', 60],
    ['giây', 1]
  ];
  for (const [label, seconds] of units) {
    if (abs >= seconds) {
      const value = Math.round(abs / seconds);
      return diffSeconds < 0 ? `${value} ${label} trước` : `sau ${value} ${label}`;
    }
  }
  return 'vừa xong';
}
