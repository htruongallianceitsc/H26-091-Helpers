/**
 * Chia mảng thành các nhóm có tối đa size phần tử.
 * @template T
 * @param {T[]} items
 * @param {number} size
 * @returns {T[][]}
 */
export function chunk(items, size) {
  if (!Array.isArray(items)) throw new TypeError('items phải là mảng');
  if (!Number.isInteger(size) || size <= 0) throw new RangeError('size phải là số nguyên > 0');
  const result = [];
  for (let i = 0; i < items.length; i += size) result.push(items.slice(i, i + size));
  return result;
}
