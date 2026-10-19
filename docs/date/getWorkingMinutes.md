# getWorkingMinutes

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tính số phút làm việc giữa hai instant theo ngày lịch timezone

## Signature

```text
getWorkingMinutes(start:Date|string|number,end:Date|string|number,options?:object) => number
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
import { convertTimeZone } from './convertTimeZone.js';
import { zonedDateTimeToUtc } from './zonedDateTimeToUtc.js';
/** Tính phút thực trong slots cho khoảng [start,end), kể cả ngày đổi DST. */
export function getWorkingMinutes(start,end,{timeZone='Asia/Ho_Chi_Minh',slots=[['09:00','12:00'],['13:00','18:00']],weekendDays=[0,6],holidays=[]}={}) {
 const a=asDate(start).getTime(),b=asDate(end).getTime();if(a>b)throw new RangeError('start phải <= end');
 const fmt=p=>`${p.year}-${String(p.month).padStart(2,'0')}-${String(p.day).padStart(2,'0')}`;
 let date=fmt(convertTimeZone(a,timeZone)),last=fmt(convertTimeZone(b,timeZone)),total=0,guard=0;
 while(date<=last){if(++guard>100000)throw new RangeError('Khoảng quá dài');const [y,m,d]=date.split('-').map(Number), day=new Date(Date.UTC(y,m-1,d)).getUTCDay();
  if(!weekendDays.includes(day)&&!holidays.includes(date))for(const [s,e] of slots){const left=zonedDateTimeToUtc(`${date}T${s}`,timeZone,'earlier').getTime(),right=zonedDateTimeToUtc(`${date}T${e}`,timeZone,'later').getTime();if(left>=right)throw new RangeError('slot không hợp lệ');total+=Math.max(0,Math.min(b,right)-Math.max(a,left))/60000;}
  const next=new Date(Date.UTC(y,m-1,d+1));date=next.toISOString().slice(0,10);
 }
 return total;
}
```

```text [C#]
Status: todo
```

:::

