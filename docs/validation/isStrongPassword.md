# isStrongPassword

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra mật khẩu có ít nhất 8 ký tự, chữ hoa, chữ thường, số và ký tự đặc biệt

## Signature

```text
isStrongPassword(value: string) => boolean
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- input không phải string
- chuỗi không hợp lệ

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Kiểm tra mật khẩu có ít nhất 8 ký tự, chữ hoa, chữ thường, số và ký tự đặc biệt */
export function isStrongPassword(value) {
  return typeof value === 'string' && value.length >= 8 && /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && /[^A-Za-z0-9\s]/.test(value) && !/\s/.test(value);
}
```

```text [C#]
Status: todo
```

:::

