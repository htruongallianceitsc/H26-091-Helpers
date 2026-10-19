# endOfDay

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy thời điểm cuối ngày local

## Signature

```text
endOfDay(input: Date) => Date
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
/** 23:59:59.999 theo múi giờ local của runtime. */
export function endOfDay(input) { const d=asDate(input); d.setHours(23,59,59,999); return d; }
```

```text [C#]
Status: todo
```

:::

