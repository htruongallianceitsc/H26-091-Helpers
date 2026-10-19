# deepMerge

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Gộp sâu config/options

## Signature

```text
deepMerge(...objects: object[]) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- array semantics
- null
- prototype pollution

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
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
```

```text [C#]
Status: todo
```

:::

