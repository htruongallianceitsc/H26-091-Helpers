# keyBy

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuyển mảng thành map theo key

## Signature

```text
keyBy<T,K>(items: T[], keySelector: (item:T)=>K) => Map<K,T>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- key trùng
- mảng rỗng

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Lập chỉ mục theo khóa, phần tử cuối ghi đè. */
export function keyBy(items,keySelector){
 if(!Array.isArray(items)||typeof keySelector!=='function')throw new TypeError('Cần items và keySelector');
 return new Map(items.map(item=>[keySelector(item),item]));
}
```

```text [C#]
Status: todo
```

:::

