# contrastRatio

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tính độ tương phản hai màu theo WCAG; hỗ trợ alpha foreground

## Signature

```text
contrastRatio(foreground: string, background: string) => number
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
import { parseColor, lum, opaque } from './_color.js';
/** Tính độ tương phản hai màu theo WCAG; hỗ trợ alpha foreground.
 * @param {any} input - Xem signature trong catalog.
 */
export function contrastRatio(foreground,background){const bg=parseColor(background);if(bg.a!==1)throw new RangeError('Background must be opaque');const A=lum(opaque(foreground,background)),B=lum(bg);return (Math.max(A,B)+0.05)/(Math.min(A,B)+0.05);}
```

```text [C#]
Status: todo
```

:::

