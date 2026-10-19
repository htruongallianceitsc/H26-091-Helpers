# rgbToOklch

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển sRGB sang OKLCH

## Signature

```text
rgbToOklch(r: number, g: number, b: number) => {l,c,h}
```

## Ví dụ

- Input: `"Xem test tương ứng"` → Output: `"Xem test tương ứng"`

## Edge cases

- Giá trị input không hợp lệ
- Giới hạn miền giá trị

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Chuyển sRGB sang OKLCH.
 * @see catalog/color/rgbToOklch.yml
 */
export { rgbToOklch } from './_advanced.js';
```

```text [C#]
Status: todo
```

:::

