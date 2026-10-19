# removeNullish

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Bỏ field null/undefined trước khi gửi API

## Signature

```text
removeNullish(object: object) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- giữ 0/false/chuỗi rỗng
- shallow semantics

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Bỏ field có giá trị null/undefined ở cấp hiện tại.
 * @param {Record<string, any>} object
 * @returns {Record<string, any>}
 */
export function removeNullish(object) {
  if (object == null || typeof object !== 'object' || Array.isArray(object)) throw new TypeError('object phải là plain object');
  return Object.fromEntries(Object.entries(object).filter(([, value]) => value !== null && value !== undefined));
}
```

```text [C#]
Status: todo
```

:::

