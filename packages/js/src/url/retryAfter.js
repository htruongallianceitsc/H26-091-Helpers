/** Parse Retry-After (delta-seconds hoặc HTTP-date), trả milliseconds; null nếu invalid. */
export function retryAfter(value, { now = Date.now(), maxDelayMs = 86400000 } = {}) {
  if (value == null) return null;
  const raw = String(value).trim();
  if (!raw || !Number.isFinite(maxDelayMs) || maxDelayMs < 0) return null;
  let delay;
  if (/^\d+$/.test(raw)) delay = Number(raw) * 1000;
  else { const timestamp = Date.parse(raw); if (!Number.isFinite(timestamp)) return null; delay = timestamp - now; }
  return Math.min(maxDelayMs, Math.max(0, delay));
}
