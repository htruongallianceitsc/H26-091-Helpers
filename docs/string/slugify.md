# slugify

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Tạo slug URL, bỏ dấu tiếng Việt

## Signature

```text
slugify(text: string, separator?: string) => string
```

## Ví dụ

- Input: `"Xin chào Việt Nam!"` → Output: `"xin-chao-viet-nam"`

## Edge cases

- chuỗi rỗng
- chữ đ/Đ
- nhiều khoảng trắng liên tiếp

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
import { removeAccents } from './removeAccents.js';

/**
 * Chuyển chuỗi thành slug thân thiện URL, hỗ trợ tiếng Việt.
 * @param {string} text
 * @param {string} [separator='-']
 * @returns {string}
 * @example slugify('Xin chào Việt Nam!') // 'xin-chao-viet-nam'
 */
export function slugify(text, separator = '-') {
  if (!text) return '';
  if (!separator) throw new TypeError('separator không được rỗng');

  return removeAccents(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s_-]/g, '')
    .replace(/[\s_-]+/g, separator)
    .replace(new RegExp(`^${escapeRegExp(separator)}+|${escapeRegExp(separator)}+$`, 'g'), '');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
```

```text [C#]
Status: todo
```

:::

