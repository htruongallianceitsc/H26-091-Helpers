# isUsername

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra username 3–32 ký tự ASCII, bắt đầu bằng chữ, cho phép số và dấu gạch dưới

## Signature

```text
isUsername(value: string) => boolean
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
/** Kiểm tra username 3–32 ký tự ASCII, bắt đầu bằng chữ, cho phép số và dấu gạch dưới */
export function isUsername(value) {
  return typeof value === 'string' && /^[A-Za-z][A-Za-z0-9_]{2,31}$/.test(value);
}
```

```text [C#]
Status: todo
```

:::

