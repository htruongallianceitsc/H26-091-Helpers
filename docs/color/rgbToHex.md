# rgbToHex

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển RGB/RGBA sang HEX chuẩn lowercase

## Signature

```text
rgbToHex(r: number, g: number, b: number, alpha?: number) => string
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
import { toHex } from './_color.js';
/** Chuyển RGB/RGBA sang HEX chuẩn lowercase.
 * @param {any} input - Xem signature trong catalog.
 */
export function rgbToHex(r,g,b,a){return toHex({r,g,b,a},a!==undefined);}
```

```text [C#]
Status: todo
```

:::

