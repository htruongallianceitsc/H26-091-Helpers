# isBusinessDay

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra ngày làm việc, có cấu hình cuối tuần/ngày nghỉ

## Signature

```text
isBusinessDay(input: Date|string|number, options?:object) => boolean
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
/** options: weekendDays (0=CN), holidays (YYYY-MM-DD). */
export function isBusinessDay(input,{weekendDays=[0,6],holidays=[]}={}) {
 const d=asDate(input), key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
 if(!Array.isArray(weekendDays)||weekendDays.some(x=>!Number.isInteger(x)||x<0||x>6)) throw new RangeError('weekendDays không hợp lệ');
 return !weekendDays.includes(d.getDay())&&!holidays.includes(key);
}
```

```text [C#]
Status: todo
```

:::

