# endOfWeek

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy cuối tuần, chọn ngày bắt đầu tuần

## Signature

```text
endOfWeek(input: Date, weekStartsOn?: number) => Date
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
import { startOfWeek } from './startOfWeek.js';
/** Cuối tuần local (23:59:59.999). */
export function endOfWeek(input,weekStartsOn=1) { const d=startOfWeek(input,weekStartsOn); d.setDate(d.getDate()+6); d.setHours(23,59,59,999); return d; }
```

```text [C#]
Status: todo
```

:::

