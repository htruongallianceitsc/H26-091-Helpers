# uuid

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Sinh UUID v4 bằng secure random

## Signature

```text
uuid() => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- crypto API unavailable
- format v4

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Dùng Guid.NewGuid().

## Code

::: code-group

```js [JavaScript]
/**
 * Sinh UUID v4 bằng nguồn random mật mã.
 * @returns {string}
 */
export function uuid() {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi?.randomUUID) return cryptoApi.randomUUID();
  if (!cryptoApi?.getRandomValues) throw new Error('Secure crypto API không khả dụng');
  const bytes = new Uint8Array(16);
  cryptoApi.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map(value => value.toString(16).padStart(2, '0'));
  return `${hex.slice(0,4).join('')}-${hex.slice(4,6).join('')}-${hex.slice(6,8).join('')}-${hex.slice(8,10).join('')}-${hex.slice(10).join('')}`;
}
```

```text [C#]
Dùng Guid.NewGuid().
```

:::

