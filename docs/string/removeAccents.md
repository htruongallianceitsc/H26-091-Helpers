# removeAccents

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Bỏ dấu tiếng Việt, hữu ích cho search

## Signature

```text
removeAccents(text: string) => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- null/undefined
- chữ đ/Đ
- giữ hoa/thường

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Bỏ dấu Unicode, có xử lý riêng chữ đ/Đ tiếng Việt.
 * @param {string} text
 * @returns {string}
 */
export function removeAccents(text) {
  if (text == null) return '';
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
```

```text [C#]
Status: todo
```

:::

