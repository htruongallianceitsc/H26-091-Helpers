# sortBy

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Sắp xếp theo một hoặc nhiều key

## Signature

```text
sortBy<T>(items: T[], selectors: Function[]) => T[]
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- nullish field
- stable sort

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Ưu tiên LINQ OrderBy/ThenBy.

## Code

::: code-group

```js [JavaScript]
/** Sắp xếp ổn định theo một hoặc nhiều khóa, không sửa input. */
export function sortBy(items,selectors,directions=[]) {
 if(!Array.isArray(items))throw new TypeError('items phải là mảng');
 const keys=Array.isArray(selectors)?selectors:[selectors];if(!keys.length||keys.some(fn=>typeof fn!=='function'))throw new TypeError('selectors phải là function');
 const dirs=Array.isArray(directions)?directions:[directions];
 return items.map((value,index)=>({value,index})).sort((a,b)=>{
  for(let i=0;i<keys.length;i++){const x=keys[i](a.value),y=keys[i](b.value);
   const d=x===y?0:x==null?1:y==null?-1:typeof x==='string'&&typeof y==='string'?x.localeCompare(y):x<y?-1:1;
   if(d)return d*(dirs[i]==='desc'?-1:1);
  }return a.index-b.index;
 }).map(x=>x.value);
}
```

```text [C#]
Ưu tiên LINQ OrderBy/ThenBy.
```

:::

