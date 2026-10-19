/** Duyệt tất cả các trang cursor, tránh vòng lặp cursor và hỗ trợ abort. */
export async function cursorPagination(fetchPage, { initialCursor = null, maxPages = 100, signal } = {}) {
  if (typeof fetchPage !== 'function') throw new TypeError('fetchPage must be a function');
  if (!Number.isInteger(maxPages) || maxPages < 1) throw new RangeError('maxPages must be positive');
  const items = []; const seen = new Set(); let cursor = initialCursor; let pages = 0;
  while (pages < maxPages) {
    if (signal?.aborted) throw signal.reason ?? new DOMException('Aborted', 'AbortError');
    if (cursor != null) { if (seen.has(cursor)) throw new Error('Repeated pagination cursor'); seen.add(cursor); }
    const page = await fetchPage(cursor, { signal, page: pages + 1 });
    if (!page || !Array.isArray(page.items)) throw new TypeError('page.items must be an array');
    items.push(...page.items); pages++;
    const next = page.nextCursor ?? null;
    if (next == null) return { items, pages, nextCursor: null, complete: true };
    cursor = next;
  }
  return { items, pages, nextCursor: cursor, complete: false };
}
