# set

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Gán value theo path a.b.c

## Signature

```text
set(object: object, path: string, value: unknown) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- path mới
- array index
- prototype pollution

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Tạo bản sao và cập nhật giá trị theo path. */
export function set(object, path, value) {
  const keys = Array.isArray(path) ? path : typeof path === 'string' ? path.split('.').filter(Boolean) : null;
  if (!keys?.length) throw new TypeError('path không hợp lệ');
  if (keys.some(k => ['__proto__','constructor','prototype'].includes(String(k)))) throw new Error('Unsafe path');
  const root = Array.isArray(object) ? [...object] : { ...(object ?? {}) }; let cur=root; let old=object;
  for (let i=0;i<keys.length;i++) {
    const k=keys[i]; if(i===keys.length-1){ cur[k]=value; break; }
    const prior=old?.[k]; const next=Array.isArray(prior)?[...prior]:prior!==null&&typeof prior==='object'?{...prior}:/^(0|[1-9]\d*)$/.test(String(keys[i+1]))?[]:{};
    cur[k]=next;cur=next;old=prior;
  }
  return root;
}
```

```text [C#]
Status: todo
```

:::

