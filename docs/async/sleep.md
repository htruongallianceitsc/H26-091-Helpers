# sleep

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chờ n mili-giây

## Signature

```text
sleep(ms: number, signal?: AbortSignal) => Promise<void>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- abort
- ms âm

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Chờ trong số mili-giây chỉ định.
 * @param {number} ms
 * @param {AbortSignal} [signal]
 * @returns {Promise<void>}
 */
export function sleep(ms, signal) {
  if (!Number.isFinite(ms) || ms < 0) return Promise.reject(new RangeError('ms phải là số >= 0'));
  if (signal?.aborted) return Promise.reject(signal.reason ?? new DOMException('Aborted', 'AbortError'));
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      cleanup();
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      cleanup();
      reject(signal.reason ?? new DOMException('Aborted', 'AbortError'));
    };
    const cleanup = () => signal?.removeEventListener('abort', onAbort);
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}
```

```text [C#]
Status: todo
```

:::

