# isEmpty

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra object/array/string rỗng

## Signature

```text
isEmpty(value: unknown) => boolean
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- nullish
- Map/Set

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Kiểm tra rỗng cho chuỗi, mảng, Map, Set, plain object. */
export function isEmpty(value) {
  if(value == null) return true;
  if(typeof value==='string'||Array.isArray(value)) return value.length===0;
  if(value instanceof Map || value instanceof Set) return value.size===0;
  if(typeof value==='object') return Reflect.ownKeys(value).length===0;
  return false;
}
```

```text [C#]
Status: todo
```

:::

