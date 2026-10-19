# zonedDateTimeToUtc

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Giải quyết local wall-clock datetime tại timezone thành UTC instant

## Signature

```text
zonedDateTimeToUtc(local:string, timeZone:string, disambiguation?:string) => Date
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
import { convertTimeZone } from './convertTimeZone.js';
/** Parse ISO local wall time, cấm tự động đoán DST gap/overlap theo mặc định. */
export function zonedDateTimeToUtc(local,timeZone,disambiguation='reject') {
 if(!['reject','earlier','later'].includes(disambiguation)) throw new RangeError('disambiguation không hợp lệ');
 const m=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/.exec(local);
 if(!m) throw new RangeError('Cần định dạng YYYY-MM-DDTHH:mm[:ss]');
 const parts=m.slice(1).map(x=>x===undefined?0:Number(x)),[y,mo,day,h,mi,s=0]=parts;
 const wall=Date.UTC(y,mo-1,day,h,mi,s);
 if(y<100||mo<1||mo>12||day<1||day>31||h>23||mi>59||s>59||new Date(wall).toISOString().slice(0,10)!==`${y}-${String(mo).padStart(2,'0')}-${String(day).padStart(2,'0')}`) throw new RangeError('Ngày giờ không hợp lệ');
 const candidates=[];
 for(let delta=-86400000;delta<=86400000;delta+=1800000){
  const sample=wall+delta, off=convertTimeZone(sample,timeZone).offsetMinutes;
  const instant=wall-off*60000, p=convertTimeZone(instant,timeZone);
  if(p.year===y&&p.month===mo&&p.day===day&&p.hour===h&&p.minute===mi&&p.second===s&&!candidates.includes(instant)) candidates.push(instant);
 }
 candidates.sort((a,b)=>a-b);
 if(!candidates.length) throw new RangeError('Giờ local không tồn tại do DST gap');
 if(candidates.length>1&&disambiguation==='reject') throw new RangeError('Giờ local không duy nhất do DST overlap');
 return new Date(disambiguation==='later'?candidates.at(-1):candidates[0]);
}
```

```text [C#]
Status: todo
```

:::

