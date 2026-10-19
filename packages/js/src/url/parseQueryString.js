/**
 * Parse query string thành object. Repeated key trở thành array.
 * @param {string} query
 * @returns {Record<string, string|string[]>}
 */
export function parseQueryString(query) {
  const normalized = query.startsWith('?') ? query.slice(1) : query;
  const search = new URLSearchParams(normalized);
  const out = {};
  for (const [key, value] of search) {
    if (!(key in out)) out[key] = value;
    else if (Array.isArray(out[key])) out[key].push(value);
    else out[key] = [out[key], value];
  }
  return out;
}
