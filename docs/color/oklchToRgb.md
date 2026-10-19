# oklchToRgb

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển OKLCH sang sRGB, clip gamut

## Signature

```text
oklchToRgb(l: number, c: number, h: number) => {r,g,b}
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
/** Chuyển OKLCH sang sRGB, clip gamut.
 * @see catalog/color/oklchToRgb.yml
 */
export { oklchToRgb } from './_advanced.js';
```

```text [C#]
Status: todo
```

:::

