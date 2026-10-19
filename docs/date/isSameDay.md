# isSameDay

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

So sánh cùng ngày lịch local

## Signature

```text
isSameDay(a: Date, b: Date) => boolean
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
/** So sánh ngày lịch local, không so sánh timestamp. */
export function isSameDay(a,b) { const x=asDate(a),y=asDate(b); return x.getFullYear()===y.getFullYear() && x.getMonth()===y.getMonth() && x.getDate()===y.getDate(); }
```

```text [C#]
Status: todo
```

:::

