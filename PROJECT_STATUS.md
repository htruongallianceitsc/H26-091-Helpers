# Project Status — v0.9.0

- Catalog: 155 helpers.
- JavaScript implemented: 127 helpers (121 trước đây + 6 mới).
- v0.9.0: requestDeduplication, circuitBreaker, rateLimiter, retryAfter, cursorPagination, createApiClient.
- Mỗi helper mới có metadata, source, Vitest file và trang docs tự sinh.
- `npm run check:offline`: PASS, gồm test hành vi v0.9.0.
- Vitest chưa chạy trực tiếp do thiếu dependency trong môi trường build.
- Lưu ý: circuit/rate/dedup chỉ quản lý trạng thái trong một process; không thay thế hệ thống distributed.

## v1.0.0 Color Utilities

- Thêm 15 helper màu, kèm source, Vitest, metadata và docs sinh tự động.
- Phân biệt WCAG 2.x contrast ratio và các mô hình mới (APCA chưa hỗ trợ).

## v1.1.0 Color Advanced

- Catalog: 183 helpers; bổ sung 13 helper Color Advanced có source, test và metadata.
- RGB ↔ HSV; RGB ↔ OKLCH (sRGB/D65, gamut clipping khi xuất); compositing alpha, gradient sRGB; analogous/triadic/tetradic; Kelvin → RGB (xấp xỉ).
- `npm run check:offline`: PASS, gồm kiểm tra round-trip OKLCH và regression các phiên bản trước.
- Vitest test files đã được tạo; chưa chạy Vitest trực tiếp trong môi trường này.
- Giới hạn: interpolation trong gamma-encoded sRGB, không phải perceptual interpolation; Kelvin là mô hình xấp xỉ; màu ngoài gamut bị clip.
