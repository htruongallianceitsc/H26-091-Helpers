# retryAfter

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Đọc header Retry-After dạng seconds hoặc HTTP date

## Signature

```text
retryAfter(options: object) => object | Promise
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid input
- async failure
- cancellation or boundary

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Parse Retry-After (delta-seconds hoặc HTTP-date), trả milliseconds; null nếu invalid. */
export function retryAfter(value, { now = Date.now(), maxDelayMs = 86400000 } = {}) {
  if (value == null) return null;
  const raw = String(value).trim();
  if (!raw || !Number.isFinite(maxDelayMs) || maxDelayMs < 0) return null;
  let delay;
  if (/^\d+$/.test(raw)) delay = Number(raw) * 1000;
  else { const timestamp = Date.parse(raw); if (!Number.isFinite(timestamp)) return null; delay = timestamp - now; }
  return Math.min(maxDelayMs, Math.max(0, delay));
}
```

```text [C#]
Status: todo
```

:::

