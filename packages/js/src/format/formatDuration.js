/** Định dạng thời lượng milliseconds sang HH:mm:ss */
export function formatDuration(milliseconds, { showMilliseconds = false } = {}) {
  if (!Number.isSafeInteger(milliseconds) || milliseconds < 0) throw new RangeError('Invalid duration');
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor(milliseconds / 60000) % 60;
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const ms = milliseconds % 1000;
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}${showMilliseconds ? '.'+String(ms).padStart(3,'0') : ''}`;
}
