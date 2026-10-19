# buildQueryString

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển object thành query string

## Signature

```text
buildQueryString(params: object, options?: object) => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- Unicode
- array
- nullish

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Chuyển object thành query string. Array được encode bằng repeated key.
 * @param {Record<string, unknown>} params
 * @param {{prefix?: boolean, skipNullish?: boolean}} [options]
 * @returns {string}
 */
export function buildQueryString(params, options = {}) {
  const { prefix = false, skipNullish = true } = options;
  const search = new URLSearchParams();
  for (const [key, raw] of Object.entries(params ?? {})) {
    const values = Array.isArray(raw) ? raw : [raw];
    for (const value of values) {
      if (value == null && skipNullish) continue;
      search.append(key, value == null ? '' : String(value));
    }
  }
  const result = search.toString();
  return prefix && result ? `?${result}` : result;
}
```

```text [C#]
Status: todo
```

:::

