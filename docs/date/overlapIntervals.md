# overlapIntervals

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Trả về khoảng giao giữa hai khoảng UTC instant [start,end)

## Signature

```text
overlapIntervals(a:object,b:object) => {start:Date,end:Date}|null
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
/** Khoảng [start,end) có end > start, giao điểm đơn không tính là giao. */
export function overlapIntervals(a,b) {
 const x1=asDate(a.start).getTime(),x2=asDate(a.end).getTime(),y1=asDate(b.start).getTime(),y2=asDate(b.end).getTime();
 if(x1>x2||y1>y2)throw new RangeError('Khoảng không hợp lệ');
 const start=Math.max(x1,y1),end=Math.min(x2,y2);return start<end?{start:new Date(start),end:new Date(end)}:null;
}
```

```text [C#]
Status: todo
```

:::

