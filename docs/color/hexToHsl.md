# hexToHsl

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển màu HEX/RGB sang HSL

## Signature

```text
hexToHsl(color: string) => {h,s,l}
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
import { rgbToHslRaw, parseColor } from './_color.js';
/** Chuyển màu HEX/RGB sang HSL.
 * @param {any} input - Xem signature trong catalog.
 */
export function hexToHsl(color){return rgbToHslRaw(parseColor(color));}
```

```text [C#]
Status: todo
```

:::

