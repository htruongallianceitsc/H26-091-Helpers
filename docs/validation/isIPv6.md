# isIPv6

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Kiểm tra IPv6 đầy đủ/rút gọn và IPv4-mapped

## Signature

```text
isIPv6(value: string) => boolean
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- input không phải string
- chuỗi không hợp lệ

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Kiểm tra IPv6 đầy đủ/rút gọn và IPv4-mapped */
import { isIPv4 } from './isIPv4.js';
export function isIPv6(value) {
  if (typeof value !== 'string' || value.includes('%') || !/^[0-9a-fA-F:.]+$/.test(value)) return false;
  let s = value;
  let ipv4Slots = 0;
  if (s.includes('.')) {
    const pos = s.lastIndexOf(':');
    if (pos < 0 || !isIPv4(s.slice(pos + 1))) return false;
    s = s.slice(0, pos) + ':0:0';
    ipv4Slots = 1; // IPv4 được biểu diễn bằng hai nhóm 16-bit
  }
  if (s.includes(':::') || s.split('::').length > 2) return false;
  const compressed = s.includes('::');
  if (!compressed && (s.startsWith(':') || s.endsWith(':'))) return false;
  const groups = s.split(':').filter(Boolean);
  if (groups.some(x => !/^[0-9a-fA-F]{1,4}$/.test(x))) return false;
  const count = groups.length - (ipv4Slots ? 2 : 0) + (ipv4Slots ? 2 : 0);
  return compressed ? count < 8 : count === 8;
}
```

```text [C#]
Status: todo
```

:::

