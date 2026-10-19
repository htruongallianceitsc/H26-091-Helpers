# alphaBlend

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Ghép màu foreground lên background theo alpha

## Signature

```text
alphaBlend(foreground: string, background: string) => string
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
/** Ghép màu foreground lên background theo alpha.
 * @see catalog/color/alphaBlend.yml
 */
export { alphaBlend } from './_advanced.js';
```

```text [C#]
Status: todo
```

:::

