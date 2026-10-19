# omit

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Bỏ một số field khỏi object

## Signature

```text
omit<T>(object: T, keys: (keyof T)[]) => Partial<T>
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
 * Bỏ một tập key khỏi object và trả object mới.
 * @template T
 * @param {T} object
 * @param {(keyof T)[]} keys
 * @returns {Partial<T>}
 */
export function omit(object, keys) {
  if (object == null || typeof object !== 'object') throw new TypeError('object phải là object');
  const excluded = new Set(keys);
  return Object.fromEntries(Object.entries(object).filter(([key]) => !excluded.has(key)));
}
```

```text [C#]
Status: todo
```

:::

