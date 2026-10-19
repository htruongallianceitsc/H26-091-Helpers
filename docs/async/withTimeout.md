# withTimeout

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Giới hạn thời gian promise

## Signature

```text
withTimeout<T>(promise: Promise<T>, ms: number) => Promise<T>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- abort underlying task
- race

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Promise timeout. Timeout does not cancel underlying work unless it honors the supplied signal. */
export function withTimeout(operation, timeoutMs, options = {}) {
  if (!Number.isFinite(timeoutMs) || timeoutMs < 0) throw new RangeError('timeoutMs không hợp lệ');
  const { signal } = options;
  return new Promise((resolve, reject) => {
    let settled = false;
    const abortError = () => signal?.reason ?? new DOMException('Aborted', 'AbortError');
    const cleanup = () => { clearTimeout(timer); signal?.removeEventListener('abort', onAbort); };
    const finish = (fn, value) => { if (settled) return; settled = true; cleanup(); fn(value); };
    const onAbort = () => finish(reject, abortError());
    const timer = setTimeout(() => finish(reject, new DOMException('Timed out', 'TimeoutError')), timeoutMs);
    if (signal?.aborted) { onAbort(); return; }
    signal?.addEventListener('abort', onAbort, { once: true });
    Promise.resolve().then(() => typeof operation === 'function' ? operation() : operation).then(v => finish(resolve, v), e => finish(reject, e));
  });
}
```

```text [C#]
Status: todo
```

:::

