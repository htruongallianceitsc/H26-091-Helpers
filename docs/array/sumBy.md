# sumBy

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tính tổng theo selector

## Signature

```text
sumBy<T>(items: T[], selector: (item:T)=>number) => number
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- mảng rỗng
- NaN

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Ưu tiên LINQ Sum.

## Code

::: code-group

```js [JavaScript]
/** Tính tổng theo selector. */
export function sumBy(items,selector=x=>x){if(!Array.isArray(items)||typeof selector!=='function')throw new TypeError('Input không hợp lệ');return items.reduce((sum,item)=>{const value=selector(item);if(typeof value!=='number'||!Number.isFinite(value))throw new TypeError('Giá trị phải là số hữu hạn');return sum+value;},0);}
```

```text [C#]
Ưu tiên LINQ Sum.
```

:::

