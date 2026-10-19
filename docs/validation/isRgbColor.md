# isRgbColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra rgb() và rgba() với kênh nguyên 0–255 và alpha 0–1

## Signature

```text
isRgbColor(value: string) => boolean
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
/** Kiểm tra rgb() và rgba() với kênh nguyên 0–255 và alpha 0–1 */
export function isRgbColor(value) {
  if (typeof value !== 'string') return false;
  const m = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0(?:\.\d+)?|1(?:\.0+)?))?\s*\)$/.exec(value);
  if (!m || m.slice(1,4).some(v => Number(v) > 255)) return false;
  return value.startsWith('rgba(') === (m[4] !== undefined);
}
```

```text [C#]
Status: todo
```

:::

