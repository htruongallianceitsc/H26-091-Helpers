# daysInMonth

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Đếm ngày trong tháng

## Signature

```text
daysInMonth(input: Date) => number
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid date và năm nhuận
- timezone, DST hoặc ranh giới ngày/tháng

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
import { asDate } from './_internal.js';
/** Số ngày trong tháng, có xét năm nhuận. */
export function daysInMonth(input) { const d=asDate(input); return new Date(d.getFullYear(),d.getMonth()+1,0).getDate(); }
```

```text [C#]
Status: todo
```

:::

