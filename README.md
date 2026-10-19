# Helpers Hub

Kho helper dùng chung được tổ chức theo nguyên tắc **metadata-first**: mỗi helper có một file YAML trong `catalog/` làm nguồn dữ liệu gốc cho tên, mục đích, signature, ví dụ, edge case, độ ưu tiên và trạng thái theo ngôn ngữ.

## Mục tiêu

- Tài liệu và checklist được sinh từ metadata để giảm lệch giữa mô tả và code.
- Code tách theo ngôn ngữ để dùng đúng tooling của npm, NuGet và pip.
- Mỗi helper là một đơn vị độc lập, ưu tiên pure function, không phụ thuộc thư viện runtime ngoài.
- `done` chỉ hợp lệ khi helper có code, test và tài liệu.
- `builtin` dùng khi nền tảng đã có giải pháp chuẩn và không nên viết lại.

## Cấu trúc

```text
helpers-hub/
├─ catalog/                 # nguồn dữ liệu gốc, 1 YAML / helper
├─ docs/                    # tài liệu VitePress, sinh từ catalog + source
├─ packages/
│  ├─ js/                   # package JS đang hoạt động
│  ├─ csharp/               # skeleton cho giai đoạn C#
│  └─ python/               # placeholder cho giai đoạn sau
├─ scripts/                 # validate, sinh checklist/docs, scaffold helper
├─ CHECKLIST.md             # file sinh tự động
└─ CONVENTIONS.md
```

## Bắt đầu nhanh

Yêu cầu Node.js 20+.

```bash
npm install
npm run check
npm run docs:dev
```

Nếu môi trường chưa thể tải dependency từ npm registry, chạy kiểm tra lõi không cần dependency:

```bash
npm run check:offline
```

## Tạo helper mới

```bash
npm run new-helper -- --category string --id normalizeWhitespace --summary "Chuẩn hóa khoảng trắng"
```

Mặc định scaffold JS. Có thể chỉ định ngôn ngữ:

```bash
npm run new-helper -- --category string --id normalizeWhitespace --summary "Chuẩn hóa khoảng trắng" --languages js,csharp
```

Sau khi chỉnh metadata/code/test:

```bash
npm run generate
npm run check
```

## Trạng thái

- `done`: đã có code + test + doc.
- `wip`: đang triển khai.
- `todo`: chưa triển khai.
- `builtin`: dùng API chuẩn của ngôn ngữ/nền tảng.
- `n/a`: không áp dụng cho ngôn ngữ đó.

Xem ma trận đầy đủ tại [CHECKLIST.md](./CHECKLIST.md).
