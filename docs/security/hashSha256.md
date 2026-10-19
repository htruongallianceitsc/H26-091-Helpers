# hashSha256

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tính SHA-256 hex của văn bản UTF-8.

## Signature

```text
hashSha256(input: string) => Promise<string>
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
/** Băm SHA-256 UTF-8 bằng Web Crypto. Không dùng để hash mật khẩu. */
export async function hashSha256(input) {
  if (typeof input !== 'string') throw new TypeError('input phải là string');
  if (!globalThis.crypto?.subtle) throw new Error('Web Crypto SubtleCrypto không khả dụng');
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return [...new Uint8Array(bytes)].map(b => b.toString(16).padStart(2, '0')).join('');
}
```

```text [C#]
Status: todo
```

:::

