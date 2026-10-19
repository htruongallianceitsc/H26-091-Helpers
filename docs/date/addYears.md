# addYears

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Cộng năm có xử lý ngày nhuận

## Signature

```text
addYears(input: Date, years: number) => Date
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
import { addMonths } from './addMonths.js';
import { finiteNumber } from './_internal.js';
/** Cộng năm; 29/02 được clamp về 28/02 khi năm đích không nhuận. */
export function addYears(input,years) { finiteNumber(years,'years'); if(!Number.isInteger(years))throw new RangeError('years phải là số nguyên'); return addMonths(input,years*12); }
```

```text [C#]
Status: todo
```

:::

