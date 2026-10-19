# normalizeColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuẩn hóa HEX/RGB/RGBA về HEX, giữ alpha nếu có

## Signature

```text
normalizeColor(color: string) => string
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
import { parseColor, toHex } from './_color.js';
/** Chuẩn hóa HEX/RGB/RGBA về HEX, giữ alpha nếu có.
 * @param {any} input - Xem signature trong catalog.
 */
export function normalizeColor(color){const x=parseColor(color);return toHex(x,x.a!==1);}
```

```text [C#]
Status: todo
```

:::

