# addBusinessDays

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Cộng hoặc trừ ngày làm việc, bỏ cuối tuần/ngày nghỉ

## Signature

```text
addBusinessDays(input: Date|string|number, days:number, options?:object) => Date
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
/** Cộng số ngày làm việc (ngày bắt đầu không tính); giới hạn tránh vòng lặp vô hạn. */
export function addBusinessDays(input,days,options={}) {
 if(!Number.isInteger(days)||Math.abs(days)>100000) throw new RangeError('days phải là số nguyên trong giới hạn');
 const d=asDate(input); if(!days) return d;
 if((options.weekendDays??[0,6]).length===7) throw new RangeError('Không tồn tại ngày làm việc');
 const sign=Math.sign(days);let remaining=Math.abs(days),steps=0;
 while(remaining>0){if(++steps>365000)throw new RangeError('Không tìm thấy ngày làm việc');d.setDate(d.getDate()+sign);if(isBusinessDay(d,options))remaining--;}
 return d;
}
```

```text [C#]
Status: todo
```

:::

