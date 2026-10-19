# isHexColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra mã màu #RGB, #RGBA, #RRGGBB, #RRGGBBAA

## Signature

```text
isHexColor(value: string) => boolean
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
/** Kiểm tra mã màu #RGB, #RGBA, #RRGGBB, #RRGGBBAA */
export function isHexColor(value) {
  return typeof value === 'string' && /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value);
}
```

```text [C#]
Status: todo
```

:::

