# replaceAllRegex

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Thay thế chuỗi theo regex, mặc định thay toàn bộ

## Signature

```text
replaceAllRegex(...args) => value
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
/** Thay thế chuỗi theo regex, mặc định thay toàn bộ */
export function replaceAllRegex(value, pattern, replacement) {
  if (typeof value !== 'string' || !(pattern instanceof RegExp) || !(typeof replacement === 'string' || typeof replacement === 'function')) throw new TypeError('Invalid arguments');
  const regex = new RegExp(pattern.source,pattern.flags.includes('g') ? pattern.flags : pattern.flags+'g');
  return value.replace(regex,replacement);
}
/** Pattern phải đến từ mã tin cậy. */
```

```text [C#]
Status: todo
```

:::

