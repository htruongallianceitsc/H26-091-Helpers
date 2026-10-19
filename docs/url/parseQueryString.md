# parseQueryString

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển query string thành object

## Signature

```text
parseQueryString(query: string) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- repeated key
- empty query
- Unicode

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Parse query string thành object. Repeated key trở thành array.
 * @param {string} query
 * @returns {Record<string, string|string[]>}
 */
export function parseQueryString(query) {
  const normalized = query.startsWith('?') ? query.slice(1) : query;
  const search = new URLSearchParams(normalized);
  const out = {};
  for (const [key, value] of search) {
    if (!(key in out)) out[key] = value;
    else if (Array.isArray(out[key])) out[key].push(value);
    else out[key] = [out[key], value];
  }
  return out;
}
```

```text [C#]
Status: todo
```

:::

