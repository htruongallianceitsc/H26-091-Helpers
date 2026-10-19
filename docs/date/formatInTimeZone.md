# formatInTimeZone

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Định dạng thời gian theo IANA timezone

## Signature

```text
formatInTimeZone(input: Date, timeZone: string, locale?: string, options?: object) => string
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
/** Định dạng ở IANA timezone bằng Intl. Không suy diễn timezone từ string thiếu offset. */
export function formatInTimeZone(input,timeZone,locale='vi-VN',options={ dateStyle:'medium',timeStyle:'short' }) {
 if(typeof timeZone!=='string'||!timeZone)throw new RangeError('timeZone là bắt buộc');
 return new Intl.DateTimeFormat(locale,{...options,timeZone}).format(asDate(input));
}
```

```text [C#]
Status: todo
```

:::

