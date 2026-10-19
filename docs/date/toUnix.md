# toUnix

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Date sang Unix timestamp (seconds hoặc milliseconds)

## Signature

```text
toUnix(input: Date, unit?: string) => number
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid date và năm nhuận
- timezone, DST hoặc ranh giới ngày/tháng

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Dùng DateTimeOffset.ToUnixTimeSeconds/FromUnixTimeSeconds hoặc bản Milliseconds.

## Code

::: code-group

```js [JavaScript]
import { asDate } from './_internal.js';
/** Unix timestamp theo seconds (mặc định) hoặc milliseconds. */
export function toUnix(input, unit='seconds') { const ms=asDate(input).getTime(); if(unit==='milliseconds')return ms; if(unit==='seconds')return Math.floor(ms/1000); throw new RangeError('unit phải là seconds hoặc milliseconds'); }
```

```text [C#]
Dùng DateTimeOffset.ToUnixTimeSeconds/FromUnixTimeSeconds hoặc bản Milliseconds.
```

:::

