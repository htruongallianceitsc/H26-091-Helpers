# promisePool

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Giới hạn số promise chạy song song

## Signature

```text
promisePool<T>(tasks: Function[], concurrency: number) => Promise<T[]>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- concurrency <= 0
- fail-fast

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Run tasks with a bounded concurrency; preserve input result order. Stops scheduling after first failure. */
export async function promisePool(items, worker, concurrency = 4, options = {}) {
  if (!Array.isArray(items) || typeof worker !== 'function') throw new TypeError('items/worker không hợp lệ');
  if (!Number.isInteger(concurrency) || concurrency < 1) throw new RangeError('concurrency phải >= 1');
  const { signal } = options;
  const results = new Array(items.length);
  let next = 0;
  let failure;
  async function runner() {
    while (next < items.length && failure === undefined) {
      if (signal?.aborted) { failure = signal.reason ?? new DOMException('Aborted', 'AbortError'); return; }
      const i = next++;
      try { results[i] = await worker(items[i], i, signal); }
      catch (error) { failure = error; return; }
    }
  }
  await Promise.all(Array.from({length: Math.min(concurrency, items.length)}, runner));
  if (failure !== undefined) throw failure;
  return results;
}
```

```text [C#]
Status: todo
```

:::

