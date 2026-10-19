# redactSensitiveData

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Che các field nhạy cảm trong JSON/object dùng cho log.

## Signature

```text
redactSensitiveData(value: unknown, keys?: string[]) => unknown
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- Unicode và input không hợp lệ
- không sử dụng fallback crypto không an toàn

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Che dữ liệu nhạy cảm trong log; giữ nguyên input, xử lý vòng tham chiếu. */
export function redactSensitiveData(value, keys = ['password','token','accessToken','refreshToken','authorization','secret','apiKey','clientSecret','cookie','setCookie']) {
  const sensitive = new Set(keys.map(key => key.replace(/[^a-z0-9]/gi, '').toLowerCase()));
  const seen = new WeakMap();
  function walk(data) {
    if (!data || typeof data !== 'object') return data;
    if (data instanceof Date) return new Date(data.getTime());
    if (seen.has(data)) return seen.get(data);
    if (Array.isArray(data)) { const result = []; seen.set(data, result); for (const entry of data) result.push(walk(entry)); return result; }
    const result = {}; seen.set(data, result);
    for (const [key, val] of Object.entries(data)) {
      Object.defineProperty(result, key, { value: sensitive.has(key.replace(/[^a-z0-9]/gi, '').toLowerCase()) ? '[REDACTED]' : walk(val), enumerable: true, configurable: true, writable: true });
    }
    return result;
  }
  return walk(value);
}
```

```text [C#]
Status: todo
```

:::

