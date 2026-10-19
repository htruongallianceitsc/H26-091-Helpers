# joinUrl

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Nối URL không tạo slash dư

## Signature

```text
joinUrl(...parts: string[]) => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- protocol slash
- query/hash

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Join URL path segments while preserving the scheme and query. */
export function joinUrl(base, ...parts) {
  const url = new URL(base);
  const path = [url.pathname.replace(/\/+$/, ''), ...parts.map(x => String(x).replace(/^\/+|\/+$/g, ''))].filter(Boolean).join('/');
  url.pathname = path.startsWith('/') ? path : '/' + path;
  return url.toString();
}
```

```text [C#]
Status: todo
```

:::

