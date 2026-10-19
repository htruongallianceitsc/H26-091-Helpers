# formatPercent

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Định dạng tỷ lệ thành phần trăm theo locale

## Signature

```text
formatPercent(...args) => value
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
/** Định dạng tỷ lệ thành phần trăm theo locale */
export function formatPercent(value, { locale = 'vi-VN', digits = 2, fromRatio = true } = {}) {
  if (!Number.isFinite(value) || !Number.isInteger(digits) || digits < 0 || digits > 20) throw new RangeError('Invalid value or digits');
  return new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: digits }).format(fromRatio ? value : value / 100);
}
```

```text [C#]
Status: todo
```

:::

