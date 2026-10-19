# copyToClipboard

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Sao chép text qua Clipboard API

## Signature

```text
copyToClipboard(text: string) => Promise<void>
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- API unavailable
- permission denied

## Trạng thái

- JavaScript: ✅ `done`
- C#: ➖ `n/a`

## Ghi chú theo ngôn ngữ

- **csharp:** Browser-only helper.

## Code

::: code-group

```js [JavaScript]
/**
 * Sao chép text bằng Clipboard API.
 * @param {string} text
 * @returns {Promise<void>}
 */
export async function copyToClipboard(text) {
  const clipboard = globalThis.navigator?.clipboard;
  if (!clipboard?.writeText) throw new Error('Clipboard API không khả dụng');
  await clipboard.writeText(String(text));
}
```

```text [C#]
Status: n/a
```

:::

