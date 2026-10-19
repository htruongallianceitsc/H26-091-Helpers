# paginate

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Phân trang mảng trong bộ nhớ

## Signature

```text
paginate<T>(items: T[], page: number, pageSize: number) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- page ngoài phạm vi
- pageSize <= 0

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Phân trang mảng theo số trang bắt đầu từ 1. */
export function paginate(items,page=1,pageSize=20){
 if(!Array.isArray(items)||!Number.isSafeInteger(page)||page<1||!Number.isSafeInteger(pageSize)||pageSize<1)throw new RangeError('Thông số paginate không hợp lệ');
 const total=items.length,totalPages=Math.ceil(total/pageSize);
 return {items:items.slice((page-1)*pageSize,page*pageSize),page,pageSize,total,totalPages,hasNext:page<totalPages,hasPrevious:page>1&&totalPages>0};
}
```

```text [C#]
Status: todo
```

:::

