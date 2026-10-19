# hexToBytes

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Giải mã hex strict sang Uint8Array.

## Signature

```text
hexToBytes(hex: string) => Uint8Array
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
/** Decode chuỗi hex (độ dài chẵn) sang Uint8Array. */
export function hexToBytes(hex) {
  if (typeof hex !== 'string' || hex.length % 2 !== 0 || !/^[a-fA-F0-9]*$/.test(hex)) throw new TypeError('Hex không hợp lệ');
  return Uint8Array.from(hex.match(/../g) ?? [], item => Number.parseInt(item, 16));
}
```

```text [C#]
Status: todo
```

:::

