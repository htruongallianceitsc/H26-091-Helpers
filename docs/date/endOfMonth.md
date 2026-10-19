# endOfMonth

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy cuối tháng local

## Signature

```text
endOfMonth(input: Date) => Date
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
/** Cuối tháng theo local time. */
export function endOfMonth(input) { const d=asDate(input); d.setDate(1); d.setMonth(d.getMonth()+1); d.setDate(0); d.setHours(23,59,59,999); return d; }
```

```text [C#]
Status: todo
```

:::

