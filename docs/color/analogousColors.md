# analogousColors

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Sinh ba màu tương đồng theo góc hue

## Signature

```text
analogousColors(color: string, angle?: number) => string[]
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
/** Sinh ba màu tương đồng theo góc hue.
 * @see catalog/color/analogousColors.yml
 */
export { analogousColors } from './_advanced.js';
```

```text [C#]
Status: todo
```

:::

