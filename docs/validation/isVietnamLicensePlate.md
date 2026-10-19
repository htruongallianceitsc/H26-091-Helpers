# isVietnamLicensePlate

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra định dạng biển xe Việt Nam phổ biến, không tra cứu biển số thực tế

## Signature

```text
isVietnamLicensePlate(value: string) => boolean
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
/** Kiểm tra định dạng biển xe Việt Nam phổ biến, không tra cứu biển số thực tế */
export function isVietnamLicensePlate(value) {
  if (typeof value !== 'string') return false;
  const s = value.toUpperCase().replace(/[\s.-]/g, '');
  return /^(?:\d{2}[A-Z]{1,2}\d{4,5}|\d{2}[A-Z]\d{6})$/.test(s);
}
```

```text [C#]
Status: todo
```

:::

