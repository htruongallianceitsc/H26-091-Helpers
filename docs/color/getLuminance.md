# getLuminance

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tính luminance tương đối sRGB theo WCAG

## Signature

```text
getLuminance(color: string) => number
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
import { parseColor, lum } from './_color.js';
/** Tính luminance tương đối sRGB theo WCAG.
 * @param {any} input - Xem signature trong catalog.
 */
export function getLuminance(color){const x=parseColor(color);if(x.a!==1)throw new RangeError('Color must be opaque');return lum(x);}
```

```text [C#]
Status: todo
```

:::

