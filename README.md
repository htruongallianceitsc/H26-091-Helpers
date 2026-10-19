# Helpers Hub v1.0.0

Helpers Hub

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

## Date / DateTime (v0.2.0)

Bổ sung 20 helper JS: `addDays`, `diffDays`, `startOfDay`, `endOfDay`, `isSameDay`, `isWeekend`, `toUnix`, `fromUnix`, `addMonths`, `addYears`, `startOfMonth`, `endOfMonth`, `daysInMonth`, `isLeapYear`, `parseDate`, `isBetween`, `getTimezoneOffset`, `formatInTimeZone`, `startOfWeek`, `endOfWeek`.

- Hàm calendar dùng timezone local của runtime. `addDays` thay đổi **ngày lịch**, không cộng 86400000ms, để xử lý DST.
- Input `YYYY-MM-DD` được hiểu là **ngày local**, trong khi ISO datetime có `Z` hoặc `+07:00` biểu diễn một **instant**. Khi gửi API, ưu tiên UTC ISO 8601 đầy đủ offset.
- `toUnix`/`fromUnix` mặc định dùng **seconds**; truyền `'milliseconds'` nếu cần ms.
- `formatInTimeZone` dùng IANA timezone ví dụ `Asia/Ho_Chi_Minh`, không đổi instant gốc.
- `parseDate` hỗ trợ `DD/MM/YYYY` hoặc `YYYY-MM-DD`, từ chối ngày không tồn tại.
- Chạy `npm run check:offline` để kiểm tra 20 helper date ngay cả khi chưa cài Vitest.

Ví dụ:

```js
import { parseDate, addMonths, formatDate, formatInTimeZone } from '@helpers-hub/js';
const next = addMonths(parseDate('31/01/2024'), 1);
console.log(formatDate(next)); // 29/02/2024
console.log(formatInTimeZone('2026-10-19T00:00:00Z', 'Asia/Ho_Chi_Minh'));
```

## v0.3.0: Business calendar & timezone

- ISO week/year, timezone wall-time conversion (IANA), detect DST gaps/overlaps.
- Business days, configurable holidays, hours and working-minute calculations.
- `getVietnamHolidays` intentionally returns **only fixed Gregorian holidays**; it does NOT supply lunar holidays, compensatory days, or the variable additional National Day holiday. Pass officially confirmed dates using `extraDates`.
- Date-only inputs are **local calendar dates** for local-day helpers; timestamps and explicit `Z`/offset values represent instants. For cross-timezone business hours, pass instants and a `timeZone`.
- Intervals use `[start,end)` semantics.
- Run `npm run check:offline` even when Vitest cannot be installed.

## v0.4.0 — Format + Regex

Bổ sung 8 format helpers và 9 regex helpers (xem `docs/format` và `docs/regex`). Pattern regex chỉ dùng nguồn tin cậy: JS `RegExp` không cung cấp timeout để chống ReDoS.

## v0.5.0 — Validation

14 validation helpers have been added (including CCCD, Vietnam tax code, vehicle plates, postcodes, colors, IP, usernames and ISO date/time). Syntax checks are **not** authoritative validation against government databases.

## v0.6.0 — Security & Encoding

Bổ sung 11 helper: `hashSha256`, `hmacSha256`, `generateSecureToken`, `base64UrlEncode`, `base64UrlDecode`, `constantTimeEqual`, `parseJwtPayload`, `sanitizeFilename`, `redactSensitiveData`, `bytesToHex`, `hexToBytes`. Dùng `npm run check:offline` để chạy kiểm tra không cần npm install. **Không** dùng `parseJwtPayload` để xác thực JWT; không dùng SHA-256 thuần để lưu mật khẩu.

## v0.7.0: Object & Collection Data Transformation

Bổ sung/hoàn thiện 15 helpers: `get`, `set`, `isEmpty`, `isEqual`, `flattenObject`, `unflattenObject`, `diffObjects`, `normalizeApiResponse`, `sortBy`, `keyBy`, `paginate`, `difference`, `intersection`, `sumBy`, `average`.

- Giữ lại các helper `deepClone`, `deepMerge`, `pick`, `omit`, `groupBy`, `uniqueBy` hiện có, không tạo bản trùng lặp.
- `get` và `set` nhận path dạng `a.b.0`; `set` trả về shallow clones theo đường dẫn và không sửa dữ liệu gốc.
- `flattenObject` không chấp nhận key chứa dấu chấm và circular reference; array được giữ nguyên như leaf value.
- `unflattenObject` chặn các đoạn path nguy hiểm để giảm rủi ro prototype pollution.
- `isEqual` xử lý object/array/date/regex và circular references; **không hỗ trợ so sánh Map/Set sâu**, trừ trường hợp cùng tham chiếu.
- `diffObjects` trả về thay đổi **top-level**, không phải JSON Patch.
- `normalizeApiResponse` là công cụ quy ước shape dữ liệu, không tự xác nhận HTTP status.
- `keyBy` trả `Map`, tránh xung đột các khóa như `__proto__`; `paginate` dùng page bắt đầu từ 1.

Regression offline: `npm run check:offline` (bao gồm `scripts/data-v07-test.js`).


## v1.0.0: Async, HTTP & Resilience

- `withTimeout`: timeout cho promise; **không tự hủy tác vụ gốc** nếu tác vụ không hỗ trợ abort.
- `promisePool`: giới hạn số task chạy đồng thời, giữ thứ tự output.
- `httpClient`: wrapper fetch, lỗi `AppError`, timeout, AbortSignal, retry có backoff. Chỉ retry mặc định với HTTP method idempotent; không tự retry POST/PATCH.
- `tryCatch`: tuple `[error, value]` và `joinUrl`: nối URL.
- Giữ tương thích các helper `retry`, `debounce`, `throttle`, `buildQueryString`, `parseQueryString` hiện có.
- Chạy `npm run check:offline` để kiểm tra mà không cần npm registry.

**Cảnh báo:** URL phải được ứng dụng tin cậy, không truyền URL từ người dùng trực tiếp vào server-side fetch (SSRF); không ghi log token/header nhạy cảm. Retry PUT/DELETE chỉ an toàn khi backend đảm bảo idempotency.

## v1.0.0 — HTTP & API Production Utilities

Bổ sung 6 helper: `requestDeduplication`, `circuitBreaker`, `rateLimiter`, `retryAfter`, `cursorPagination`, `createApiClient`.

- `requestDeduplication`: chỉ gộp request đang pending theo key, không cache kết quả; chỉ dùng key phù hợp (bao gồm user/tenant nếu cần).
- `circuitBreaker`: state in-memory theo instance, một probe half-open.
- `rateLimiter`: sliding window đơn process; không bảo vệ rate limit phân tán.
- `retryAfter`: parse delta seconds và HTTP date, giới hạn delay. Không tự động retry từ hàm này.
- `cursorPagination`: trả `complete=false` khi chạm `maxPages`; phát hiện vòng lặp cursor.
- `createApiClient`: token provider và request/response/error hooks, kết hợp `httpClient` của v0.8.0. Không tự retry phương thức POST.

Chạy `npm run check:offline` để chạy regression kiểm thử v0.1–v0.9 và validate catalog. Test Vitest: `npm install && npm test`.

## Color Utilities — v1.0.0

15 helper mới trong `color/`: chuyển HEX/RGB/HSL; pha trộn/làm sáng/tối; palette; luminance và contrast WCAG 2.x. Các API nhận string HEX/rgb()/rgba() theo cú pháp giới hạn, không hỗ trợ named CSS colors, `hsl()` input hay CSS variables. Để tính tương phản với alpha, background phải opaque; các phép trộn theo sRGB channel không phải perceptual mixing.

## v1.1.0 — Color Advanced

Bổ sung 13 helper trong `packages/js/src/color/`: `rgbToHsv`, `hsvToRgb`, `hexToHsv`, `hsvToHex`, `alphaBlend`, `interpolateGradient`, `analogousColors`, `triadicColors`, `tetradicColors`, `colorTemperatureToRgb`, `rgbToOklch`, `oklchToRgb`, `oklchToHex`.

```js
import { hexToHsv, alphaBlend, interpolateGradient, rgbToOklch, oklchToHex } from '@helpers-hub/js';
hexToHsv('#ff6600');
alphaBlend('#ff000080', '#000000'); // #800000
interpolateGradient(['#000', '#fff'], 3); // ['#000000', '#808080', '#ffffff']
const color = rgbToOklch(255, 0, 0);
oklchToHex(color.l, color.c, color.h); // #ff0000
```

Các quy tắc quan trọng: `h` theo độ, HSV `s/v` theo phần trăm 0–100; OKLCH `l` nằm trong 0–1, `c` không âm. Chuyển OKLCH về sRGB áp dụng clipping gamut. `interpolateGradient` nội suy trực tiếp kênh sRGB (không phải perceptual); phép Kelvin chỉ xấp xỉ màu vật đen lý tưởng. Để chạy regression không cần cài package: `npm run check:offline`.
