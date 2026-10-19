# hslToHex

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển HSL sang HEX sRGB

## Signature

```text
hslToHex(h: number, s: number, l: number) => string
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
import { hslToRgbRaw, toHex } from './_color.js';
/** Chuyển HSL sang HEX sRGB.
 * @param {any} input - Xem signature trong catalog.
 */
export function hslToHex(h,s,l){return toHex(hslToRgbRaw(h,s,l));}
```

```text [C#]
Status: todo
```

:::

