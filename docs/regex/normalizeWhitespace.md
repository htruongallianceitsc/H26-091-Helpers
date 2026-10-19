# normalizeWhitespace

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuẩn hóa mọi whitespace Unicode về dấu cách đơn

## Signature

```text
normalizeWhitespace(...args) => value
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
/** Chuẩn hóa mọi whitespace Unicode về dấu cách đơn */
export function normalizeWhitespace(value, { preserveNewlines = false } = {}) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  if (!preserveNewlines) return value.replace(/\s+/gu,' ').trim();
  return value.replace(/\r\n?/g,'\n').split('\n').map(x=>x.replace(/[^\S\n]+/gu,' ').trim()).join('\n').replace(/\n{3,}/g,'\n\n').trim();
}
```

```text [C#]
Status: todo
```

:::

