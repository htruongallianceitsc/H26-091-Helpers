# getFirstMatch

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy match đầu tiên không ảnh hưởng lastIndex regex gốc

## Signature

```text
getFirstMatch(...args) => value
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
/** Lấy match đầu tiên không ảnh hưởng lastIndex regex gốc */
export function getFirstMatch(value, pattern) {
  if (typeof value !== 'string' || !(pattern instanceof RegExp)) throw new TypeError('Invalid arguments');
  const regex = new RegExp(pattern.source,pattern.flags);
  const match = regex.exec(value);
  return match ? { match: match[0], index: match.index, captures: match.slice(1), groups: match.groups ?? {} } : null;
}
```

```text [C#]
Status: todo
```

:::

