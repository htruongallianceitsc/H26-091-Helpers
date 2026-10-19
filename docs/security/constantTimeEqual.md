# constantTimeEqual

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

So sánh byte arrays theo vòng lặp tránh short-circuit.

## Signature

```text
constantTimeEqual(a: Uint8Array, b: Uint8Array) => boolean
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
/** So sánh bytes không short-circuit; JavaScript không đảm bảo constant-time tuyệt đối. */
export function constantTimeEqual(a, b) {
  if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) throw new TypeError('Yêu cầu Uint8Array');
  let diff = a.length ^ b.length;
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}
```

```text [C#]
Status: todo
```

:::

