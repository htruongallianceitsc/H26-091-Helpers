# rateLimiter

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Sliding window in-memory, không dùng thay rate limiting phân tán

## Signature

```text
rateLimiter(options: object) => object | Promise
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
/** Sliding-window rate limiter in-memory; phù hợp một process, không phân tán. */
export function rateLimiter({ limit = 10, intervalMs = 1000, now = Date.now } = {}) {
  if (!Number.isInteger(limit) || limit < 1 || !Number.isFinite(intervalMs) || intervalMs <= 0) throw new RangeError('invalid rate limit');
  const calls = new Map();
  return {
    check(key = 'default') {
      const current = now(); const timestamps = (calls.get(key) ?? []).filter(t => current - t < intervalMs);
      if (timestamps.length >= limit) { calls.set(key, timestamps); return { allowed: false, remaining: 0, retryAfterMs: Math.max(0, timestamps[0] + intervalMs - current) }; }
      timestamps.push(current); calls.set(key, timestamps);
      return { allowed: true, remaining: limit - timestamps.length, retryAfterMs: 0 };
    },
    reset(key) { if (key === undefined) calls.clear(); else calls.delete(key); }
  };
}
```

```text [C#]
Status: todo
```

:::

