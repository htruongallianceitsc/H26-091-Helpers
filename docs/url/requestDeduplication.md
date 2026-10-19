# requestDeduplication

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Gộp promise trùng key trong khi đang pending, không cache kết quả

## Signature

```text
requestDeduplication(options: object) => object | Promise
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
/** Gộp các thao tác đang chạy theo khóa; chỉ dọn nếu đúng Promise hiện tại. */
export function requestDeduplication() {
  const pending = new Map();
  return {
    run(key, factory) {
      if (typeof factory !== 'function') throw new TypeError('factory must be a function');
      if (pending.has(key)) return pending.get(key);
      const task = Promise.resolve().then(factory);
      const shared = task.finally(() => { if (pending.get(key) === shared) pending.delete(key); });
      pending.set(key, shared);
      return shared;
    },
    has: key => pending.has(key),
    get size() { return pending.size; }
  };
}
```

```text [C#]
Status: todo
```

:::

