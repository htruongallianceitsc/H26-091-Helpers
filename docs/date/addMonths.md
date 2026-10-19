# addMonths

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Cộng tháng có xử lý cuối tháng

## Signature

```text
addMonths(input: Date, months: number) => Date
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
/** Cộng tháng, clamp ngày cuối tháng (31/01 + 1 tháng -> 28/02). */
export function addMonths(input,months) { finiteNumber(months,'months'); if(!Number.isInteger(months))throw new RangeError('months phải là số nguyên'); const d=asDate(input),day=d.getDate(); d.setDate(1); d.setMonth(d.getMonth()+months); const last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(); d.setDate(Math.min(day,last)); return d; }
```

```text [C#]
Status: todo
```

:::

