/** Lấy match đầu tiên không ảnh hưởng lastIndex regex gốc */
export function getFirstMatch(value, pattern) {
  if (typeof value !== 'string' || !(pattern instanceof RegExp)) throw new TypeError('Invalid arguments');
  const regex = new RegExp(pattern.source,pattern.flags);
  const match = regex.exec(value);
  return match ? { match: match[0], index: match.index, captures: match.slice(1), groups: match.groups ?? {} } : null;
}
