# startOfWeek

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy đầu tuần, chọn ngày bắt đầu tuần

## Signature

```text
startOfWeek(input: Date, weekStartsOn?: number) => Date
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
/** Đầu tuần local; mặc định thứ Hai (weekStartsOn=1), Sunday=0. */
export function startOfWeek(input,weekStartsOn=1) { if(!Number.isInteger(weekStartsOn)||weekStartsOn<0||weekStartsOn>6)throw new RangeError('weekStartsOn không hợp lệ'); const d=asDate(input); const diff=(d.getDay()-weekStartsOn+7)%7; d.setDate(d.getDate()-diff); d.setHours(0,0,0,0); return d; }
```

```text [C#]
Status: todo
```

:::

