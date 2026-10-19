# bytesToHex

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển bytes sang hex lowercase.

## Signature

```text
bytesToHex(bytes: Uint8Array) => string
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
/** Encode Uint8Array thành hex lowercase. */
export function bytesToHex(bytes) {
  if (!(bytes instanceof Uint8Array)) throw new TypeError('Yêu cầu Uint8Array');
  return [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
}
```

```text [C#]
Status: todo
```

:::

