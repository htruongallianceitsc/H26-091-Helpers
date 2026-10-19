# isCCCD

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra định dạng CCCD 12 chữ số, không xác minh cấp phát

## Signature

```text
isCCCD(value: string) => boolean
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
/** Kiểm tra định dạng CCCD 12 chữ số, không xác minh cấp phát */
export function isCCCD(value) {
  return typeof value === 'string' && /^[0-9]{12}$/.test(value);
}
```

```text [C#]
Status: todo
```

:::

