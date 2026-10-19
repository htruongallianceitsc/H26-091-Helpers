# complementaryColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy màu bổ sung bằng cách xoay hue 180 độ

## Signature

```text
complementaryColor(color: string) => string
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
import { parseColor, rgbToHslRaw, hslToRgbRaw, toHex } from './_color.js';
/** Lấy màu bổ sung bằng cách xoay hue 180 độ.
 * @param {any} input - Xem signature trong catalog.
 */
export function complementaryColor(color){const c=parseColor(color),h=rgbToHslRaw(c);return toHex({...hslToRgbRaw(h.h+180,h.s,h.l),a:c.a},c.a!==1);}
```

```text [C#]
Status: todo
```

:::

