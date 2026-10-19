# lightenColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tăng độ sáng HSL với amount 0..1

## Signature

```text
lightenColor(color: string, amount: number) => string
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
/** Tăng độ sáng HSL với amount 0..1.
 * @param {any} input - Xem signature trong catalog.
 */
export function lightenColor(color,amount){if(!Number.isFinite(amount)||amount<0||amount>1)throw new RangeError('amount 0..1');const c=parseColor(color),h=rgbToHslRaw(c);return toHex({...hslToRgbRaw(h.h,h.s,Math.min(100,h.l+amount*100)),a:c.a},c.a!==1);}
```

```text [C#]
Status: todo
```

:::

