# parseJwtPayload

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chỉ decode JSON payload JWT, KHÔNG xác minh chữ ký.

## Signature

```text
parseJwtPayload(token: string) => object
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
import { base64UrlDecode } from './base64UrlDecode.js';
/** Chỉ đọc payload JWT, không xác thực token, signature, exp, iss, aud. */
export function parseJwtPayload(token) {
  if (typeof token !== 'string') throw new TypeError('token phải là string');
  const parts = token.split('.');
  if (parts.length !== 3 || !parts.every(Boolean)) throw new TypeError('JWT phải gồm 3 phần');
  let payload;
  try { payload = JSON.parse(base64UrlDecode(parts[1])); } catch { throw new TypeError('JWT payload JSON không hợp lệ'); }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new TypeError('JWT payload phải là object');
  return payload;
}
```

```text [C#]
Status: todo
```

:::

