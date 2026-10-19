# isBetween

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra thời điểm nằm trong khoảng

## Signature

```text
isBetween(input: Date, start: Date, end: Date, inclusive?: boolean) => boolean
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
/** Kiểm tra thời điểm trong khoảng [start, end] (inclusive). */
export function isBetween(input,start,end,inclusive=true) { const t=asDate(input).getTime(),a=asDate(start).getTime(),b=asDate(end).getTime(); if(a>b)throw new RangeError('start không thể sau end'); return inclusive?t>=a&&t<=b:t>a&&t<b; }
```

```text [C#]
Status: todo
```

:::

