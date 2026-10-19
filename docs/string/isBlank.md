# isBlank

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra null/rỗng/chỉ có khoảng trắng

## Signature

```text
isBlank(value: unknown) => boolean
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- null
- undefined
- whitespace
- 0/false không phải blank

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Kiểm tra null, undefined, chuỗi rỗng hoặc chỉ có khoảng trắng.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBlank(value) {
  return value == null || (typeof value === 'string' && value.trim().length === 0);
}
```

```text [C#]
Status: todo
```

:::

