# startOfMonth

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy đầu tháng local

## Signature

```text
startOfMonth(input: Date) => Date
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
/** Đầu tháng theo local time. */
export function startOfMonth(input) { const d=asDate(input); d.setDate(1); d.setHours(0,0,0,0); return d; }
```

```text [C#]
Status: todo
```

:::

