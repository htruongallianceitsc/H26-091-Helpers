# isMatch

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra match regex với flags an toàn, tránh stateful global

## Signature

```text
isMatch(...args) => value
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
/** Kiểm tra match regex với flags an toàn, tránh stateful global */
export function isMatch(value, pattern, flags = '') {
  if (typeof value !== 'string' || !(typeof pattern === 'string' || pattern instanceof RegExp)) throw new TypeError('Invalid arguments');
  if (typeof flags !== 'string') throw new TypeError('Invalid flags');
  const source = pattern instanceof RegExp ? pattern.source : pattern;
  const activeFlags = flags || (pattern instanceof RegExp ? pattern.flags : '');
  return new RegExp(source, activeFlags.replace(/[gy]/g,'')).test(value);
}
/** Không sử dụng với regex từ nguồn không tin cậy: JS không có timeout regex. */
```

```text [C#]
Status: todo
```

:::

