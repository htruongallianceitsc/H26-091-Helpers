# convertTimeZone

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển instant sang thông tin giờ địa phương của timezone IANA

## Signature

```text
convertTimeZone(input: Date|string|number, timeZone:string) => object
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
/** Trả các thành phần wall-clock theo timezone, không thay đổi instant. */
export function convertTimeZone(input,timeZone) {
 const d=asDate(input), format=new Intl.DateTimeFormat('en-US',{timeZone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
 const p=Object.fromEntries(format.formatToParts(d).filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)]));
 const offsetMinutes=Math.round((Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second)-Math.floor(d.getTime()/1000)*1000)/60000);
 return {...p,timeZone,offsetMinutes};
}
```

```text [C#]
Status: todo
```

:::

