# getReadableTextColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chọn màu chữ sáng/tối theo độ tương phản lớn hơn

## Signature

```text
getReadableTextColor(background: string, light?: string, dark?: string) => string
```

## Ví dụ

- Input: `"Xem file test"` → Output: `"Xem file test"`

## Edge cases

- Giá trị không hợp lệ
- Biên miền giá trị
- Alpha và màu bán trong suốt

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
import { contrastRatio } from './contrastRatio.js';
/** Chọn màu chữ sáng/tối theo độ tương phản lớn hơn.
 * @param {any} input - Xem signature trong catalog.
 */
export function getReadableTextColor(background,light='#ffffff',dark='#000000'){return contrastRatio(light,background)>=contrastRatio(dark,background)?light:dark;}
```

```text [C#]
Status: todo
```

:::

