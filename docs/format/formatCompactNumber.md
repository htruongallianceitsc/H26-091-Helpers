# formatCompactNumber

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Định dạng số rút gọn 1K, 1M theo locale

## Signature

```text
formatCompactNumber(...args) => value
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
/** Định dạng số rút gọn 1K, 1M theo locale */
export function formatCompactNumber(value, { locale = 'en-US', digits = 1 } = {}) {
  if (!Number.isFinite(value)) throw new TypeError('Expected finite number');
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: digits }).format(value);
}
```

```text [C#]
Status: todo
```

:::

