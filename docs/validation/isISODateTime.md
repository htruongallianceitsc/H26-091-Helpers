# isISODateTime

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra timestamp ISO 8601 có timezone Z hoặc offset; kiểm tra ngày/giờ thực

## Signature

```text
isISODateTime(value: string) => boolean
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- input không phải string
- chuỗi không hợp lệ

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Kiểm tra timestamp ISO 8601 có timezone Z hoặc offset; kiểm tra ngày/giờ thực */
import { isISODate } from './isISODate.js';
export function isISODateTime(value) {
  if (typeof value !== 'string') return false;
  const m = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(value);
  if (!m || !isISODate(m[1])) return false;
  const [h,min,sec] = m.slice(2,5).map(Number);
  if (h > 23 || min > 59 || sec > 59) return false;
  if (m[5] !== 'Z') {
    const oh = Number(m[5].slice(1,3)); const om = Number(m[5].slice(4,6));
    if (oh > 23 || om > 59) return false;
  }
  return true;
}
```

```text [C#]
Status: todo
```

:::

