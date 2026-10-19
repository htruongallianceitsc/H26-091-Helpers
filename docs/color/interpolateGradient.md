# interpolateGradient

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Nội suy gradient qua nhiều điểm màu

## Signature

```text
interpolateGradient(stops: string[], steps?: number) => string[]
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
/** Nội suy gradient qua nhiều điểm màu.
 * @see catalog/color/interpolateGradient.yml
 */
export { interpolateGradient } from './_advanced.js';
```

```text [C#]
Status: todo
```

:::

