# getVietnamHolidays

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Danh sách ngày nghỉ cố định theo luật VN; Tết và giỗ Tổ phải truyền từ lịch chính thức

## Signature

```text
getVietnamHolidays(year:number, options?:object) => string[]
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
/** Chỉ ngày lễ dương lịch cố định theo Bộ luật Lao động; không đoán lịch âm, lịch nghỉ bù và lịch điều chỉnh chính thức. */
export function getVietnamHolidays(year,{extraDates=[]}={}) {
 if(!Number.isInteger(year)||year<100||year>9999) throw new RangeError('year không hợp lệ');
 const dates=[`${year}-01-01`,`${year}-04-30`,`${year}-05-01`,`${year}-09-02`,...extraDates];
 if(extraDates.some(x=>typeof x!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(x)))throw new RangeError('extraDates phải là YYYY-MM-DD');
 return [...new Set(dates)].sort();
}
```

```text [C#]
Status: todo
```

:::

