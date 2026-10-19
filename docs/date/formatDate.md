# formatDate

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Định dạng ngày theo pattern

## Signature

```text
formatDate(input: Date|string|number, pattern?: string) => string
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid date
- YYYY-MM-DD tránh lệch UTC

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Định dạng ngày theo token YYYY, MM, DD, HH, mm, ss.
 * Chuỗi YYYY-MM-DD được hiểu là ngày local để tránh lệch ngày do UTC parsing.
 * @param {Date|string|number} input
 * @param {string} [pattern='DD/MM/YYYY']
 * @returns {string}
 */
export function formatDate(input, pattern = 'DD/MM/YYYY') {
  const date = toDate(input);
  if (Number.isNaN(date.getTime())) throw new RangeError('Ngày không hợp lệ');
  const tokens = {
    YYYY: String(date.getFullYear()),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  return pattern.replace(/YYYY|MM|DD|HH|mm|ss/g, token => tokens[token]);
}

function toDate(input) {
  if (input instanceof Date) return new Date(input.getTime());
  if (typeof input === 'string') {
    const match = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  return new Date(input);
}

function pad(value) { return String(value).padStart(2, '0'); }
```

```text [C#]
Status: todo
```

:::

