# diffObjects

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Liệt kê thay đổi top-level trước/sau.

## Signature

```text
diffObjects(before, after) => object
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
/** Liệt kê thay đổi top-level trước/sau. */
import { isEqual } from './isEqual.js';
export function diffObjects(before,after){
 if(!before||!after||typeof before!=='object'||typeof after!=='object'||Array.isArray(before)||Array.isArray(after))throw new TypeError('Cần hai object');
 const changes=[];for(const key of new Set([...Object.keys(before),...Object.keys(after)])){
  const hasBefore=Object.hasOwn(before,key),hasAfter=Object.hasOwn(after,key);
  if(!hasBefore)changes.push({key,type:'added',after:after[key]});
  else if(!hasAfter)changes.push({key,type:'removed',before:before[key]});
  else if(!isEqual(before[key],after[key]))changes.push({key,type:'changed',before:before[key],after:after[key]});
 }return changes;
}
```

```text [C#]
Status: todo
```

:::

