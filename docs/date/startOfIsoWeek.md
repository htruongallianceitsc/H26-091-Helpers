# startOfIsoWeek

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Đầu tuần ISO (thứ Hai, giờ local)

## Signature

```text
startOfIsoWeek(input: Date|string|number) => Date
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid input, biên ngày tháng và timezone
- kiểm tra DST hoặc lịch làm việc nếu có liên quan

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
import { asDate } from './_internal.js';
/** Lấy thứ Hai 00:00 theo local timezone. */
export function startOfIsoWeek(input) { const d=asDate(input); d.setHours(0,0,0,0); d.setDate(d.getDate()-((d.getDay()+6)%7)); return d; }
```

```text [C#]
Status: todo
```

:::

