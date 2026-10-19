# isWeekend

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Xác định thứ bảy, chủ nhật

## Signature

```text
isWeekend(input: Date) => boolean
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
/** Thứ bảy và chủ nhật, theo múi giờ local. */
export function isWeekend(input) { return [0,6].includes(asDate(input).getDay()); }
```

```text [C#]
Status: todo
```

:::

