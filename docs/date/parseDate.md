# parseDate

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Parse ngày theo format xác định và validate calendar

## Signature

```text
parseDate(text: string, format?: string) => Date
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid date và năm nhuận
- timezone, DST hoặc ranh giới ngày/tháng

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
import { asDate } from './_internal.js';
/** Parse chính xác chuỗi theo DD/MM/YYYY hoặc YYYY-MM-DD; không tự đoán format. */
export function parseDate(text,format='DD/MM/YYYY') {
 if(typeof text!=='string')throw new TypeError('text phải là chuỗi');
 const re=format==='DD/MM/YYYY'? /^(\d{2})\/(\d{2})\/(\d{4})$/ : format==='YYYY-MM-DD'? /^(\d{4})-(\d{2})-(\d{2})$/ : null;
 if(!re)throw new RangeError('format không được hỗ trợ'); const m=re.exec(text); if(!m)throw new RangeError('Ngày sai định dạng');
 const [y,mo,day]=format==='DD/MM/YYYY'?[+m[3],+m[2],+m[1]]:[+m[1],+m[2],+m[3]];
 const d=new Date(0); d.setFullYear(y,mo-1,day); d.setHours(0,0,0,0);
 if(d.getFullYear()!==y||d.getMonth()!==mo-1||d.getDate()!==day) throw new RangeError('Ngày không tồn tại');return asDate(d);
}
```

```text [C#]
Status: todo
```

:::

