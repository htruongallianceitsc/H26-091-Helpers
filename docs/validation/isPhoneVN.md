# isPhoneVN

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra số di động Việt Nam

## Signature

```text
isPhoneVN(value: string) => boolean
```

## Ví dụ

- Input: `"0901234567"` → Output: `true`

## Edge cases

- +84
- 0 prefix
- separator

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Kiểm tra số di động Việt Nam dạng 0xxxxxxxxx hoặc +84xxxxxxxxx.
 * @param {string} value
 * @returns {boolean}
 */
export function isPhoneVN(value) {
  if (typeof value !== 'string') return false;
  const normalized = value.replace(/[\s.-]/g, '');
  return /^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/.test(normalized);
}
```

```text [C#]
Status: todo
```

:::

