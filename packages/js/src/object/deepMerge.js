/**
 * Gộp sâu các plain object. Array được thay thế thay vì nối.
 * @param  {...Record<string, any>} objects
 * @returns {Record<string, any>}
 */
export function deepMerge(...objects) {
  return objects.reduce((acc, current) => mergeInto(acc, current), {});
}

function mergeInto(target, source) {
  if (!isPlainObject(source)) return target;
  for (const [key, value] of Object.entries(source)) {
    if (UNSAFE_KEYS.has(key)) throw new Error(`Key không an toàn khi deepMerge: ${key}`);
    if (isPlainObject(value) && isPlainObject(target[key])) {
      target[key] = mergeInto({ ...target[key] }, value);
    } else if (isPlainObject(value)) {
      target[key] = mergeInto({}, value);
    } else if (Array.isArray(value)) {
      target[key] = value.slice();
    } else {
      target[key] = value;
    }
  }
  return target;
}

const UNSAFE_KEYS = new Set(['__proto__', 'prototype', 'constructor']);

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
}
