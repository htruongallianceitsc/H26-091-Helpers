# getIsoWeek

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy ISO week và week-year, tuần bắt đầu thứ Hai

## Signature

```text
getIsoWeek(input: Date|string|number) => {week:number,year:number}
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
/** Trả ISO week-number và week-year; dùng UTC trên ngày lịch local để tránh DST. */
export function getIsoWeek(input) {
 const d=asDate(input), x=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));
 x.setUTCDate(x.getUTCDate()+4-(x.getUTCDay()||7));
 const year=x.getUTCFullYear(), jan1=Date.UTC(year,0,1);
 return {year,week:Math.ceil(((x.getTime()-jan1)/86400000+1)/7)};
}
```

```text [C#]
Status: todo
```

:::

