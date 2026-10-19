# intersection

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lấy phần tử chung của hai mảng

## Signature

```text
intersection<T>(a: T[], b: T[]) => T[]
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
/** Lấy tập giao, giữ thứ tự của mảng trái. */
export function intersection(left,right){if(!Array.isArray(left)||!Array.isArray(right))throw new TypeError('Cần hai mảng');const other=new Set(right);return [...new Set(left.filter(x=>other.has(x)))];}
```

```text [C#]
Status: todo
```

:::

