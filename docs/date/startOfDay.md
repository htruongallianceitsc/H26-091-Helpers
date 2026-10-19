# startOfDay

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy thời điểm đầu ngày local

## Signature

```text
startOfDay(input: Date) => Date
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
/** 00:00:00.000 theo múi giờ local của runtime. */
export function startOfDay(input) { const d=asDate(input); d.setHours(0,0,0,0); return d; }
```

```text [C#]
Status: todo
```

:::

