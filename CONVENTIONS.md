# Conventions

## 1. Metadata là nguồn dữ liệu gốc

Mỗi helper có đúng một file `catalog/<category>/<id>.yml`. Không sửa tay `CHECKLIST.md` hoặc các trang helper trong `docs/<category>/`; hãy sửa metadata/source rồi chạy `npm run generate`.

## 2. Quy tắc đặt tên

- `id` dùng camelCase, ổn định giữa các ngôn ngữ.
- JavaScript export đúng `id`, ví dụ `slugify`.
- C# dùng PascalCase trong lớp helper hoặc extension method, ví dụ `StringHelpers.Slugify` / `text.Slugify()`.
- Tên file JS và metadata dùng đúng `id`: `slugify.js`, `slugify.yml`.

## 3. Code

- Một helper một file.
- Ưu tiên pure function và deterministic behavior.
- Không thêm runtime dependency nếu có thể giải quyết tốt bằng standard library.
- Không nuốt lỗi im lặng; lỗi do input contract phải rõ ràng.
- Helper liên quan security/random phải dùng nguồn ngẫu nhiên mật mã, không fallback sang `Math.random()`.
- Date/time phải ghi rõ semantics timezone nếu helper có thể gây hiểu nhầm.

## 4. JavaScript

- ESM (`type: module`).
- JSDoc đầy đủ cho public API.
- Public export đi qua `packages/js/src/index.js`.
- Runtime target: Node.js 20+ và browser hiện đại khi helper không phụ thuộc môi trường riêng.

## 5. Test

Một helper `done` phải có test tương ứng. Test tối thiểu gồm:

1. happy path;
2. tất cả edge case quan trọng ghi trong metadata;
3. input rỗng/null khi contract cho phép;
4. case lỗi nếu helper có thể throw/reject.

JavaScript dùng Vitest.

## 6. Tài liệu

Trang helper phải có các mục cố định:

- Mô tả
- Signature
- Ví dụ
- Edge cases
- Trạng thái theo ngôn ngữ
- Code theo ngôn ngữ khi đã có source

Trang docs được sinh bởi `scripts/gen-docs.js`.

## 7. Definition of Done

Chỉ đặt `status.<language>: done` khi đồng thời có:

- source code;
- test;
- metadata hợp lệ;
- docs có thể sinh thành công;
- test suite pass.

`builtin` phải kèm ghi chú trong metadata `notes.<language>` chỉ ra API chuẩn nên dùng.
