# get

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Truy cập value theo path a.b.c

## Signature

```text
get(object: object, path: string, fallback?: unknown) => unknown
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- path không tồn tại
- array index

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Đọc thuộc tính theo đường dẫn dạng dấu chấm. */
export function get(object, path, fallback = undefined) {
  if (typeof path !== 'string' && !Array.isArray(path)) throw new TypeError('path không hợp lệ');
  const keys = Array.isArray(path) ? path : path.split('.').filter(Boolean);
  let value = object;
  for (const key of keys) { if (value == null || !Object.hasOwn(Object(value),key)) return fallback; value=value[key]; }
  return value === undefined ? fallback : value;
}
```

```text [C#]
Status: todo
```

:::

