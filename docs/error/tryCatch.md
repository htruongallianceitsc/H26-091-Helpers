# tryCatch

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Trả tuple error/data thay cho try/catch lặp lại

## Signature

```text
tryCatch<T>(fn: Function) => Promise<[unknown|null,T|null]>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- sync vs async
- error object

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Return [error, result] for sync or async operations. */
export async function tryCatch(operation) {
  try { return [null, await (typeof operation === 'function' ? operation() : operation)]; }
  catch (error) { return [error, undefined]; }
}
```

```text [C#]
Status: todo
```

:::

