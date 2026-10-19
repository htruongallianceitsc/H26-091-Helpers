# pick

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy một số field từ object

## Signature

```text
pick<T>(object: T, keys: (keyof T)[]) => Partial<T>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- key không tồn tại

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Lấy một tập key từ object.
 * @template T
 * @param {T} object
 * @param {(keyof T)[]} keys
 * @returns {Partial<T>}
 */
export function pick(object, keys) {
  if (object == null || typeof object !== 'object') throw new TypeError('object phải là object');
  const out = {};
  for (const key of keys) if (Object.prototype.hasOwnProperty.call(object, key)) out[key] = object[key];
  return out;
}
```

```text [C#]
Status: todo
```

:::

