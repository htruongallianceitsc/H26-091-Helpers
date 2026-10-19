# base64UrlEncode

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Mã hóa Unicode UTF-8 sang Base64URL không padding.

## Signature

```text
base64UrlEncode(text: string) => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- Unicode và input không hợp lệ
- không sử dụng fallback crypto không an toàn

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Encode chuỗi Unicode UTF-8 thành Base64URL (RFC 4648). */
export function base64UrlEncode(text) {
  if (typeof text !== 'string') throw new TypeError('text phải là string');
  const bytes = new TextEncoder().encode(text);
  if (typeof Buffer !== 'undefined') return Buffer.from(bytes).toString('base64url');
  if (typeof btoa !== 'function') throw new Error('Base64 API không khả dụng');
  let binary = ''; for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
```

```text [C#]
Status: todo
```

:::

