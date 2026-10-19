# isEqual

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

So sánh sâu hai value

## Signature

```text
isEqual(a: unknown, b: unknown) => boolean
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- Date
- Map/Set
- circular reference

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** So sánh sâu đối tượng có hỗ trợ tham chiếu vòng. */
export function isEqual(a,b) {
 const seen = new WeakMap();
 function eq(x,y) {
  if(Object.is(x,y)) return true;
  if(x===null||y===null||typeof x!=='object'||typeof y!=='object'||Object.getPrototypeOf(x)!==Object.getPrototypeOf(y))return false;
  if(seen.has(x))return seen.get(x)===y;
  seen.set(x,y);
  if(x instanceof Date)return x.getTime()===y.getTime();
  if(x instanceof RegExp)return x.source===y.source&&x.flags===y.flags;
  if(x instanceof Map||x instanceof Set) return false; // Không đoán semantics cho Map/Set.
  const kx=Reflect.ownKeys(x),ky=Reflect.ownKeys(y);
  return kx.length===ky.length&&kx.every(k=>ky.includes(k)&&eq(x[k],y[k]));
 }
 return eq(a,b);
}
```

```text [C#]
Status: todo
```

:::

