# escapeRegExp

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Escape ký tự đặc biệt để tìm kiếm chuỗi literal an toàn

## Signature

```text
escapeRegExp(...args) => value
```

## Ví dụ

- Input: `"See tests"` → Output: `"See tests"`

## Edge cases

- invalid input
- empty input
- Unicode and locale

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Escape ký tự đặc biệt để tìm kiếm chuỗi literal an toàn */
export function escapeRegExp(value) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
```

```text [C#]
Status: todo
```

:::

