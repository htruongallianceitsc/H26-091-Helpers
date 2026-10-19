# isLeapYear

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra năm nhuận

## Signature

```text
isLeapYear(input: Date|number) => boolean
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
/** Kiểm tra năm nhuận Gregorian. */
export function isLeapYear(input) { const y=typeof input==='number'?input:asDate(input).getFullYear(); if(!Number.isInteger(y))throw new RangeError('year không hợp lệ'); return y%4===0 && (y%100!==0||y%400===0); }
```

```text [C#]
Status: todo
```

:::

