# chunk

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chia mảng thành nhóm n phần tử

## Signature

```text
chunk<T>(items: T[], size: number) => T[][]
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- mảng rỗng
- size <= 0
- nhóm cuối thiếu phần tử

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Dùng Enumerable.Chunk trên .NET 6+.

## Code

::: code-group

```js [JavaScript]
/**
 * Chia mảng thành các nhóm có tối đa size phần tử.
 * @template T
 * @param {T[]} items
 * @param {number} size
 * @returns {T[][]}
 */
export function chunk(items, size) {
  if (!Array.isArray(items)) throw new TypeError('items phải là mảng');
  if (!Number.isInteger(size) || size <= 0) throw new RangeError('size phải là số nguyên > 0');
  const result = [];
  for (let i = 0; i < items.length; i += size) result.push(items.slice(i, i + size));
  return result;
}
```

```text [C#]
Dùng Enumerable.Chunk trên .NET 6+.
```

:::

