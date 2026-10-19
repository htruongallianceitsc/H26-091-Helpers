# Helpers Hub

Helpers Hub là kho helper dùng chung theo mô hình **metadata-first**. Catalog YAML là nguồn dữ liệu gốc; checklist và trang tài liệu helper được sinh tự động từ catalog và source code.

## Workflow

1. Tạo hoặc sửa metadata trong `catalog/`.
2. Viết source + test cho ngôn ngữ cần hỗ trợ.
3. Chạy `npm run generate` để cập nhật checklist/docs.
4. Chạy `npm run check` trước khi commit.

## Trạng thái

`done` · `wip` · `todo` · `builtin` · `n/a`
