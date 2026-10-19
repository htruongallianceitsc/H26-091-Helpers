# appError

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Lỗi chuẩn có code/status/details

## Signature

```text
new AppError(message: string, options?: object)
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- serialization
- cause

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Structured API / network error, without leaking secrets through request headers. */
export class AppError extends Error {
  constructor(message, { code = 'APP_ERROR', status = null, cause, retryable = false, details } = {}) {
    super(message, { cause });
    this.name = 'AppError'; this.code = code; this.status = status; this.retryable = retryable;
    if (details !== undefined) this.details = details;
  }
  toJSON() { return { name: this.name, message: this.message, code: this.code, status: this.status, retryable: this.retryable }; }
}
```

```text [C#]
Status: todo
```

:::

