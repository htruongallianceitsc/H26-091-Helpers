/** Lấy toàn bộ match kèm vị trí và groups */
export function extractMatches(value, pattern, { limit = 1000 } = {}) {
  if (typeof value !== 'string' || !(pattern instanceof RegExp) || !Number.isInteger(limit) || limit < 1 || limit > 10000) throw new TypeError('Invalid arguments');
  const regex = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags+'g');
  const results = [];
  for (const m of value.matchAll(regex)) {
    results.push({ match: m[0], index: m.index, groups: m.groups ?? {}, captures: m.slice(1) });
    if (results.length >= limit) break;
  }
  return results;
}
/** Chỉ dùng pattern tin cậy; limit giới hạn kết quả, không giới hạn CPU regex. */
