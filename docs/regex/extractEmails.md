# extractEmails

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Trích xuất email thông thường trong văn bản (không thay validation RFC)

## Signature

```text
extractEmails(...args) => value
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
/** Trích xuất email thông thường trong văn bản (không thay validation RFC) */
export function extractEmails(value, { unique = true } = {}) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  const results = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  return unique ? [...new Map(results.map(x=>[x.toLowerCase(),x])).values()] : results;
}
```

```text [C#]
Status: todo
```

:::

