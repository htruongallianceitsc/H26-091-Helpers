# formatCurrency

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Định dạng tiền tệ bằng locale/currency

## Signature

```text
formatCurrency(value: number, options?: object) => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- NaN/Infinity
- VND không có phần thập phân

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Định dạng số tiền bằng Intl.NumberFormat.
 * @param {number} value
 * @param {{currency?: string, locale?: string, minimumFractionDigits?: number, maximumFractionDigits?: number}} [options]
 * @returns {string}
 */
export function formatCurrency(value, options = {}) {
  const {
    currency = 'VND',
    locale = 'vi-VN',
    minimumFractionDigits,
    maximumFractionDigits
  } = options;
  if (!Number.isFinite(value)) throw new TypeError('value phải là số hữu hạn');
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency, minimumFractionDigits, maximumFractionDigits
  }).format(value);
}
```

```text [C#]
Status: todo
```

:::

