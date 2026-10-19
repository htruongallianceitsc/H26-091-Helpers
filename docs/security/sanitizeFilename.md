# sanitizeFilename

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuẩn hóa filename, bỏ path/control chars và tên đặc biệt.

## Signature

```text
sanitizeFilename(filename: string, replacement?: string) => string
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
/** Chỉ tạo tên file hiển thị; không thay thế path validation hoặc sandbox filesystem. */
export function sanitizeFilename(filename, replacement = '_') {
  if (typeof filename !== 'string' || typeof replacement !== 'string' || !replacement || /[\\/\x00-\x1f\x7f]/.test(replacement)) throw new TypeError('Giá trị không hợp lệ');
  let value = filename.normalize('NFC').replace(/[\\/<>:"|?*\x00-\x1f\x7f]/g, replacement).replace(/[. ]+$/g, '').trim();
  if (!value || /^\.+$/.test(value)) return 'file';
  const base = value.split('.')[0];
  if (/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(base)) value = '_' + value;
  return value.slice(0, 240) || 'file';
}
```

```text [C#]
Status: todo
```

:::

