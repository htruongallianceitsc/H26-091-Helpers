# groupBy

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Nhóm phần tử theo key

## Signature

```text
groupBy<T,K>(items: T[], keySelector: (item:T)=>K) => Map<K,T[]>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- key object
- mảng rỗng

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Dùng LINQ Enumerable.GroupBy.

## Code

::: code-group

```js [JavaScript]
/**
 * Nhóm mảng theo key và trả về Map.
 * @template T, K
 * @param {T[]} items
 * @param {(item: T) => K} keySelector
 * @returns {Map<K, T[]>}
 */
export function groupBy(items, keySelector) {
  if (!Array.isArray(items)) throw new TypeError('items phải là mảng');
  if (typeof keySelector !== 'function') throw new TypeError('keySelector phải là hàm');
  const result = new Map();
  for (const item of items) {
    const key = keySelector(item);
    const group = result.get(key);
    if (group) group.push(item);
    else result.set(key, [item]);
  }
  return result;
}
```

```text [C#]
Dùng LINQ Enumerable.GroupBy.
```

:::

