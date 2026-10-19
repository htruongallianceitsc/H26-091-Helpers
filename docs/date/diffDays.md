# diffDays

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Hiệu số ngày lịch local

## Signature

```text
diffDays(a: Date, b: Date) => number
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
import { asDate, dayNumber } from './_internal.js';
/** Khoảng ngày lịch local: a - b, bỏ giờ và tránh lỗi DST. */
export function diffDays(a,b) { return dayNumber(asDate(a))-dayNumber(asDate(b)); }
```

```text [C#]
Status: todo
```

:::

