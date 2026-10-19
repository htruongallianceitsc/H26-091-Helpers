# formatNumber

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Định dạng số và phân cách hàng nghìn

## Signature

```text
formatNumber(value: number, options?: object) => string
```

## Ví dụ

- Input: `1234567` → Output: `"1.234.567"`

## Edge cases

- NaN/Infinity
- số âm
- thập phân

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Định dạng số theo locale.
 * @param {number} value
 * @param {{locale?: string, minimumFractionDigits?: number, maximumFractionDigits?: number}} [options]
 * @returns {string}
 */
export function formatNumber(value, options = {}) {
  const { locale = 'vi-VN', ...intlOptions } = options;
  if (!Number.isFinite(value)) throw new TypeError('value phải là số hữu hạn');
  return new Intl.NumberFormat(locale, intlOptions).format(value);
}
```

```text [C#]
Status: todo
```

:::

