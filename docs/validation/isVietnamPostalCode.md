# isVietnamPostalCode

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra mã bưu chính Việt Nam 5 chữ số theo cấu trúc, không tra cứu danh mục

## Signature

```text
isVietnamPostalCode(value: string) => boolean
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
/** Kiểm tra mã bưu chính Việt Nam 5 chữ số theo cấu trúc, không tra cứu danh mục */
export function isVietnamPostalCode(value) {
  return typeof value === 'string' && /^\d{5}$/.test(value);
}
```

```text [C#]
Status: todo
```

:::

