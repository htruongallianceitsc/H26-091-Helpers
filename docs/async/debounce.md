# debounce

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Trì hoãn gọi hàm cho ô search/input

## Signature

```text
debounce(fn: Function, wait: number) => Function
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- cancel
- flush
- giữ this/args

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/**
 * Trì hoãn gọi hàm cho đến khi không còn call mới trong wait ms.
 * @template {(...args: any[]) => any} T
 * @param {T} fn
 * @param {number} wait
 * @returns {T & {cancel: () => void, flush: () => any}}
 */
export function debounce(fn, wait) {
  if (typeof fn !== 'function') throw new TypeError('fn phải là hàm');
  if (!Number.isFinite(wait) || wait < 0) throw new RangeError('wait phải >= 0');
  let timer = null;
  let lastArgs;
  let lastThis;

  function invoke() {
    timer = null;
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = lastThis = undefined;
    return fn.apply(thisArg, args);
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(invoke, wait);
  }

  debounced.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    lastArgs = lastThis = undefined;
  };
  debounced.flush = () => {
    if (!timer) return undefined;
    clearTimeout(timer);
    return invoke();
  };
  return debounced;
}
```

```text [C#]
Status: todo
```

:::

