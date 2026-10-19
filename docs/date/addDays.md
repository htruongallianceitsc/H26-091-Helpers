# addDays

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Cộng ngày lịch, an toàn khi đổi DST

## Signature

```text
addDays(input: Date|string|number, days: number) => Date
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
import { asDate, finiteNumber } from './_internal.js';
/** Cộng ngày lịch local (không cộng cứng 24h, an toàn qua DST). @param {Date|string|number} input @param {number} days @returns {Date} */
export function addDays(input, days) { finiteNumber(days,'days'); if (!Number.isInteger(days)) throw new RangeError('days phải là số nguyên'); const d=asDate(input); d.setDate(d.getDate()+days); return d; }
```

```text [C#]
Status: todo
```

:::

