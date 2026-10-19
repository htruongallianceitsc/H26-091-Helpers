# getIsoWeeksInYear

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Số tuần ISO trong năm (52 hoặc 53)

## Signature

```text
getIsoWeeksInYear(year:number) => number
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
import { getIsoWeek } from './getIsoWeek.js';
/** ISO year luôn kết thúc trong tuần chứa 28/12. */
export function getIsoWeeksInYear(year) {if(!Number.isInteger(year)||year<1||year>9999) throw new RangeError('year không hợp lệ'); return getIsoWeek(new Date(year,11,28)).week;}
```

```text [C#]
Status: todo
```

:::

