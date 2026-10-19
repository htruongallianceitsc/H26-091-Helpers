# difference

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy phần tử chỉ có ở mảng A

## Signature

```text
difference<T>(a: T[], b: T[]) => T[]
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- duplicate
- object identity

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Lấy phần tử mảng trái không nằm trong mảng phải. */
export function difference(left,right){if(!Array.isArray(left)||!Array.isArray(right))throw new TypeError('Cần hai mảng');const other=new Set(right);return [...new Set(left.filter(x=>!other.has(x)))];}
```

```text [C#]
Status: todo
```

:::

