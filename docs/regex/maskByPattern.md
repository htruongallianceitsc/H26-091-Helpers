# maskByPattern

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Che chuỗi bằng regex với nhóm capture định nghĩa trước

## Signature

```text
maskByPattern(...args) => value
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
/** Che chuỗi bằng regex với nhóm capture định nghĩa trước */
export function maskByPattern(value, pattern, replacement = '$1****$2') {
  if (typeof value !== 'string' || !(pattern instanceof RegExp) || typeof replacement !== 'string') throw new TypeError('Invalid arguments');
  return value.replace(new RegExp(pattern.source,pattern.flags), replacement);
}
/** Chỉ dùng pattern tin cậy, tránh hiển thị PII ngoài ý muốn. */
```

```text [C#]
Status: todo
```

:::

