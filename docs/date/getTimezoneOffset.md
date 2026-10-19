# getTimezoneOffset

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy offset timezone local (phút phía đông UTC)

## Signature

```text
getTimezoneOffset(input?: Date) => number
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
/** Offset phút phía đông UTC, đảo dấu so với Date.getTimezoneOffset(). */
export function getTimezoneOffset(input=new Date()) { return -asDate(input).getTimezoneOffset(); }
```

```text [C#]
Status: todo
```

:::

