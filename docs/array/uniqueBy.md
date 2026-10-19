# uniqueBy

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Loại trùng theo key, giữ phần tử đầu tiên

## Signature

```text
uniqueBy<T,K>(items: T[], keySelector: (item:T)=>K) => T[]
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- key nullish
- mảng rỗng

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Loại phần tử trùng theo key, giữ phần tử xuất hiện đầu tiên.
 * @template T, K
 * @param {T[]} items
 * @param {(item: T) => K} keySelector
 * @returns {T[]}
 */
export function uniqueBy(items, keySelector) {
  if (!Array.isArray(items)) throw new TypeError('items phải là mảng');
  if (typeof keySelector !== 'function') throw new TypeError('keySelector phải là hàm');
  const seen = new Set();
  return items.filter((item) => {
    const key = keySelector(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
```

```text [C#]
Status: todo
```

:::

