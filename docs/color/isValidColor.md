# isValidColor

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra cú pháp màu HEX/RGB/RGBA được hỗ trợ

## Signature

```text
isValidColor(value: unknown) => boolean
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
/** Kiểm tra cú pháp màu HEX/RGB/RGBA được hỗ trợ.
 * @param {any} input - Xem signature trong catalog.
 */
export function isValidColor(value){try{parseColor(value);return true;}catch{return false;}}
```

```text [C#]
Status: todo
```

:::

