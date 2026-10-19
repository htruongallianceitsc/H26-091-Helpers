# validatePattern

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Biên dịch và kiểm tra tính hợp lệ cú pháp regex

## Signature

```text
validatePattern(...args) => value
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
/** Biên dịch và kiểm tra tính hợp lệ cú pháp regex */
export function validatePattern(source, flags = '') {
  if (typeof source !== 'string' || typeof flags !== 'string') return { valid: false, error: 'Expected strings' };
  try { new RegExp(source,flags); return { valid: true, error: null }; }
  catch (error) { return { valid: false, error: error.message }; }
}
/** Chỉ xác minh cú pháp, không bảo đảm regex an toàn khỏi ReDoS. */
```

```text [C#]
Status: todo
```

:::

