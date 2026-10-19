# hexToRgb

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Đọc màu HEX 3/4/6/8 chữ số thành RGBA

## Signature

```text
hexToRgb(hex: string) => {r,g,b,a}
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
import { parseColor } from './_color.js';
/** Đọc màu HEX 3/4/6/8 chữ số thành RGBA.
 * @param {any} input - Xem signature trong catalog.
 */
export function hexToRgb(hex){const c=parseColor(hex);return c;}
```

```text [C#]
Status: todo
```

:::

