# oklchToHex

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển OKLCH sang HEX

## Signature

```text
oklchToHex(l: number, c: number, h: number) => string
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
/** Chuyển OKLCH sang HEX.
 * @see catalog/color/oklchToHex.yml
 */
export { oklchToHex } from './_advanced.js';
```

```text [C#]
Status: todo
```

:::

