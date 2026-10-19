/**
 * Loại phần tử trùng theo key, giữ phần tử xuất hiện đầu tiên.
 * @template T, K
 * @param {T[]} items
 * @param {(item: T) => K} keySelector
 * @returns {T[]}
 */
export function uniqueBy(items, keySelector) {
  if (!Array.isArray(items)) throw new TypeError('items phải là mảng');
  if (typeof keySelector !== 'function') throw new TypeError('keySelector phải là hàm');
  const seen = new Set();
  return items.filter((item) => {
    const key = keySelector(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
