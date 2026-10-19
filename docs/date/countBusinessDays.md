# countBusinessDays

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Đếm ngày làm việc trong khoảng [start,end), theo ngày lịch local

## Signature

```text
countBusinessDays(start:Date|string|number,end:Date|string|number,options?:object) => number
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
import { isBusinessDay } from './isBusinessDay.js';
/** Đếm ngày lịch trong khoảng nửa mở [start,end). */
export function countBusinessDays(start,end,options={}) {
 const a=asDate(start), b=asDate(end);a.setHours(0,0,0,0);b.setHours(0,0,0,0);
 if(a>b)throw new RangeError('start phải <= end');let result=0, guard=0;
 while(a<b){if(++guard>365000)throw new RangeError('Khoảng quá dài');if(isBusinessDay(a,options))result++;a.setDate(a.getDate()+1);}return result;
}
```

```text [C#]
Status: todo
```

:::

