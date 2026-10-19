# average

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tính trung bình

## Signature

```text
average(values: number[]) => number|null
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

- **csharp:** Ưu tiên LINQ Average khi phù hợp.

## Code

::: code-group

```js [JavaScript]
/** Tính trung bình, mảng rỗng trả về null. */
import { sumBy } from './sumBy.js';
export function average(items,selector=x=>x){if(!Array.isArray(items))throw new TypeError('Cần mảng');return items.length?sumBy(items,selector)/items.length:null;}
```

```text [C#]
Ưu tiên LINQ Average khi phù hợp.
```

:::

