/** Trích xuất email thông thường trong văn bản (không thay validation RFC) */
export function extractEmails(value, { unique = true } = {}) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  const results = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  return unique ? [...new Map(results.map(x=>[x.toLowerCase(),x])).values()] : results;
}
