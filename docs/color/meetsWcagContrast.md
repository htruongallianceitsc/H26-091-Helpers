# meetsWcagContrast

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra tương phản WCAG 2.x cho văn bản thường/lớn

## Signature

```text
meetsWcagContrast(fg: string, bg: string, level?: "AA"|"AAA", largeText?: boolean) => boolean
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
import { contrastRatio } from './contrastRatio.js';
/** Kiểm tra tương phản WCAG 2.x cho văn bản thường/lớn.
 * @param {any} input - Xem signature trong catalog.
 */
export function meetsWcagContrast(fg,bg,level='AA',largeText=false){if(!['AA','AAA'].includes(level))throw new RangeError('level must be AA or AAA');return contrastRatio(fg,bg)>=(level==='AA'?(largeText?3:4.5):(largeText?4.5:7));}
```

```text [C#]
Status: todo
```

:::

