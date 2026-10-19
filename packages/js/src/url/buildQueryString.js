/**
 * Chuyển object thành query string. Array được encode bằng repeated key.
 * @param {Record<string, unknown>} params
 * @param {{prefix?: boolean, skipNullish?: boolean}} [options]
 * @returns {string}
 */
export function buildQueryString(params, options = {}) {
  const { prefix = false, skipNullish = true } = options;
  const search = new URLSearchParams();
  for (const [key, raw] of Object.entries(params ?? {})) {
    const values = Array.isArray(raw) ? raw : [raw];
    for (const value of values) {
      if (value == null && skipNullish) continue;
      search.append(key, value == null ? '' : String(value));
    }
  }
  const result = search.toString();
  return prefix && result ? `?${result}` : result;
}
