# formatList

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Nối danh sách bằng dấu phân cách phù hợp ngôn ngữ

## Signature

```text
formatList(...args) => value
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
/** Nối danh sách bằng dấu phân cách phù hợp ngôn ngữ */
export function formatList(values, { locale = 'vi-VN', style = 'long', type = 'conjunction' } = {}) {
  if (!Array.isArray(values) || !values.every(x => typeof x === 'string')) throw new TypeError('Expected array of strings');
  return new Intl.ListFormat(locale, { style, type }).format(values);
}
```

```text [C#]
Status: todo
```

:::

