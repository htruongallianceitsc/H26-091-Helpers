# flattenObject

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Trải phẳng plain object thành các path có dấu chấm.

## Signature

```text
flattenObject(object) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- null, empty, invalid inputs

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Trải phẳng plain object thành các path có dấu chấm. */
export function flattenObject(input) {
 if(input===null||typeof input!=='object'||Array.isArray(input))throw new TypeError('Cần plain object');
 const result=Object.create(null); const seen=new WeakSet();
 function walk(obj,path){if(seen.has(obj))throw new TypeError('Không hỗ trợ circular references');seen.add(obj);
  for(const [key,value] of Object.entries(obj)){
   if(['__proto__','constructor','prototype'].includes(key)||key.includes('\\')||key.includes('.'))throw new Error('Key không hỗ trợ');
   const p=path?path+'.'+key:key;
   if(value&&Object.getPrototypeOf(value)===Object.prototype && Object.keys(value).length)walk(value,p);
   else result[p]=value;
  }seen.delete(obj);
 }walk(input,'');return result;
}
```

```text [C#]
Status: todo
```

:::

