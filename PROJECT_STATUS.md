# Project Status — v0.1.0

## Phạm vi đã dựng

- 82 helper trong catalog, phủ 12 category.
- 26 helper JavaScript hoàn chỉnh có source và test Vitest.
- 1 public barrel export: `packages/js/src/index.js`.
- 97 trang Markdown cho VitePress, sinh từ catalog/source.
- `CHECKLIST.md` sinh tự động theo trạng thái JS/C#.
- C# skeleton sẵn cho giai đoạn tiếp theo; các API .NET có sẵn được đánh dấu `builtin` khi phù hợp.
- Python placeholder để mở rộng sau.
- Script `new-helper.js` scaffold metadata + JS/C#.
- Script validate catalog, sinh checklist, sinh docs và smoke test không phụ thuộc package ngoài.
- GitHub Actions CI mẫu.

## JS helper đã hoàn chỉnh

`slugify`, `removeAccents`, `truncate`, `isBlank`, `formatCurrency`, `formatNumber`, `chunk`, `uniqueBy`, `groupBy`, `deepClone`, `deepMerge`, `pick`, `omit`, `removeNullish`, `formatDate`, `timeAgo`, `isEmail`, `isPhoneVN`, `debounce`, `throttle`, `sleep`, `retry`, `buildQueryString`, `parseQueryString`, `uuid`, `copyToClipboard`.

## Kiểm tra đã chạy khi đóng gói

```bash
npm run validate:catalog
npm run generate
npm run smoke
node --check <toàn bộ file JS>
```

Kết quả: pass. `new-helper.js` cũng đã được thử trên một bản copy tạm với `--languages js,csharp` và pass.

Các test chính thức được viết bằng Vitest. Để chạy toàn bộ test sau khi có dependency:

```bash
npm install
npm test
```

Nếu đang ở môi trường không truy cập npm registry, có thể chạy bộ kiểm tra không cần dependency:

```bash
npm run check:offline
```
