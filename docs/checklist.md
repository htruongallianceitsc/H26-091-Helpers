# Helpers Checklist

> File này được sinh tự động từ `catalog/`. Không sửa tay.

Legend: ✅ done · 🟨 wip · ⬜ todo · 🧩 builtin · ➖ n/a

## Array / Collection

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`average`](./array/average.md) | Tính trung bình | ⭐⭐ | ✅ done | 🧩 builtin |
| [`chunk`](./array/chunk.md) | Chia mảng thành nhóm n phần tử | ⭐⭐⭐ | ✅ done | 🧩 builtin |
| [`difference`](./array/difference.md) | Lấy phần tử chỉ có ở mảng A | ⭐⭐ | ✅ done | ⬜ todo |
| [`groupBy`](./array/groupBy.md) | Nhóm phần tử theo key | ⭐⭐⭐ | ✅ done | 🧩 builtin |
| [`intersection`](./array/intersection.md) | Lấy phần tử chung của hai mảng | ⭐⭐ | ✅ done | ⬜ todo |
| [`keyBy`](./array/keyBy.md) | Chuyển mảng thành map theo key | ⭐⭐ | ✅ done | ⬜ todo |
| [`paginate`](./array/paginate.md) | Phân trang mảng trong bộ nhớ | ⭐⭐ | ✅ done | ⬜ todo |
| [`sortBy`](./array/sortBy.md) | Sắp xếp theo một hoặc nhiều key | ⭐⭐ | ✅ done | 🧩 builtin |
| [`sumBy`](./array/sumBy.md) | Tính tổng theo selector | ⭐⭐ | ✅ done | 🧩 builtin |
| [`uniqueBy`](./array/uniqueBy.md) | Loại trùng theo key, giữ phần tử đầu tiên | ⭐⭐⭐ | ✅ done | ⬜ todo |

## Async / Function

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`debounce`](./async/debounce.md) | Trì hoãn gọi hàm cho ô search/input | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`memoize`](./async/memoize.md) | Cache kết quả hàm | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`once`](./async/once.md) | Chỉ cho hàm chạy một lần | ⭐ | ⬜ todo | ⬜ todo |
| [`promisePool`](./async/promisePool.md) | Giới hạn số promise chạy song song | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`retry`](./async/retry.md) | Thử lại khi lỗi với exponential backoff | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`sleep`](./async/sleep.md) | Chờ n mili-giây | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`throttle`](./async/throttle.md) | Giới hạn tần suất gọi hàm | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`withTimeout`](./async/withTimeout.md) | Giới hạn thời gian promise | ⭐⭐ | ⬜ todo | ⬜ todo |

## Browser / DOM

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`cookie`](./browser/cookie.md) | Đọc/ghi cookie | ⭐⭐ | ⬜ todo | ➖ n/a |
| [`copyToClipboard`](./browser/copyToClipboard.md) | Sao chép text qua Clipboard API | ⭐⭐⭐ | ✅ done | ➖ n/a |
| [`isInViewport`](./browser/isInViewport.md) | Kiểm tra element trong viewport | ⭐ | ⬜ todo | ➖ n/a |
| [`scrollToTop`](./browser/scrollToTop.md) | Cuộn về đầu trang | ⭐ | ⬜ todo | ➖ n/a |
| [`storage`](./browser/storage.md) | Wrapper localStorage có JSON và hạn dùng | ⭐⭐ | ⬜ todo | ➖ n/a |

## Config / Logging

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`getEnv`](./config/getEnv.md) | Đọc biến môi trường có default và ép kiểu | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`logger`](./config/logger.md) | Logger có level và timestamp | ⭐⭐ | ⬜ todo | ⬜ todo |

## Date / Time

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`addBusinessDays`](./date/addBusinessDays.md) | Cộng hoặc trừ ngày làm việc, bỏ cuối tuần/ngày nghỉ | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`addDays`](./date/addDays.md) | Cộng ngày lịch, an toàn khi đổi DST | ⭐⭐ | ✅ done | ⬜ todo |
| [`addMonths`](./date/addMonths.md) | Cộng tháng có xử lý cuối tháng | ⭐⭐ | ✅ done | ⬜ todo |
| [`addYears`](./date/addYears.md) | Cộng năm có xử lý ngày nhuận | ⭐⭐ | ✅ done | ⬜ todo |
| [`convertTimeZone`](./date/convertTimeZone.md) | Chuyển instant sang thông tin giờ địa phương của timezone IANA | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`countBusinessDays`](./date/countBusinessDays.md) | Đếm ngày làm việc trong khoảng [start,end), theo ngày lịch local | ⭐⭐ | ✅ done | ⬜ todo |
| [`daysInMonth`](./date/daysInMonth.md) | Đếm ngày trong tháng | ⭐⭐ | ✅ done | ⬜ todo |
| [`diffDays`](./date/diffDays.md) | Hiệu số ngày lịch local | ⭐⭐ | ✅ done | ⬜ todo |
| [`endOfDay`](./date/endOfDay.md) | Lấy thời điểm cuối ngày local | ⭐⭐ | ✅ done | ⬜ todo |
| [`endOfMonth`](./date/endOfMonth.md) | Lấy cuối tháng local | ⭐⭐ | ✅ done | ⬜ todo |
| [`endOfWeek`](./date/endOfWeek.md) | Lấy cuối tuần, chọn ngày bắt đầu tuần | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatDate`](./date/formatDate.md) | Định dạng ngày theo pattern | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`formatInTimeZone`](./date/formatInTimeZone.md) | Định dạng thời gian theo IANA timezone | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`fromUnix`](./date/fromUnix.md) | Unix timestamp sang Date (seconds hoặc milliseconds) | ⭐ | ✅ done | 🧩 builtin |
| [`getIsoWeek`](./date/getIsoWeek.md) | Lấy ISO week và week-year, tuần bắt đầu thứ Hai | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`getIsoWeeksInYear`](./date/getIsoWeeksInYear.md) | Số tuần ISO trong năm (52 hoặc 53) | ⭐⭐ | ✅ done | ⬜ todo |
| [`getTimezoneOffset`](./date/getTimezoneOffset.md) | Lấy offset timezone local (phút phía đông UTC) | ⭐⭐ | ✅ done | ⬜ todo |
| [`getVietnamHolidays`](./date/getVietnamHolidays.md) | Danh sách ngày nghỉ cố định theo luật VN; Tết và giỗ Tổ phải truyền từ lịch chính thức | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`getWorkingMinutes`](./date/getWorkingMinutes.md) | Tính số phút làm việc giữa hai instant theo ngày lịch timezone | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isBetween`](./date/isBetween.md) | Kiểm tra thời điểm nằm trong khoảng | ⭐⭐ | ✅ done | ⬜ todo |
| [`isBusinessDay`](./date/isBusinessDay.md) | Kiểm tra ngày làm việc, có cấu hình cuối tuần/ngày nghỉ | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isLeapYear`](./date/isLeapYear.md) | Kiểm tra năm nhuận | ⭐ | ✅ done | ⬜ todo |
| [`isSameDay`](./date/isSameDay.md) | So sánh cùng ngày lịch local | ⭐ | ✅ done | ⬜ todo |
| [`isWeekend`](./date/isWeekend.md) | Xác định thứ bảy, chủ nhật | ⭐ | ✅ done | ⬜ todo |
| [`isWithinWorkingHours`](./date/isWithinWorkingHours.md) | Kiểm tra thời điểm có trong giờ làm việc theo timezone IANA | ⭐⭐ | ✅ done | ⬜ todo |
| [`overlapIntervals`](./date/overlapIntervals.md) | Trả về khoảng giao giữa hai khoảng UTC instant [start,end) | ⭐⭐ | ✅ done | ⬜ todo |
| [`parseDate`](./date/parseDate.md) | Parse ngày theo format xác định và validate calendar | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`startOfDay`](./date/startOfDay.md) | Lấy thời điểm đầu ngày local | ⭐⭐ | ✅ done | ⬜ todo |
| [`startOfIsoWeek`](./date/startOfIsoWeek.md) | Đầu tuần ISO (thứ Hai, giờ local) | ⭐⭐ | ✅ done | ⬜ todo |
| [`startOfMonth`](./date/startOfMonth.md) | Lấy đầu tháng local | ⭐⭐ | ✅ done | ⬜ todo |
| [`startOfWeek`](./date/startOfWeek.md) | Lấy đầu tuần, chọn ngày bắt đầu tuần | ⭐⭐ | ✅ done | ⬜ todo |
| [`timeAgo`](./date/timeAgo.md) | Hiển thị thời gian tương đối như 3 phút trước | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`toUnix`](./date/toUnix.md) | Date sang Unix timestamp (seconds hoặc milliseconds) | ⭐ | ✅ done | 🧩 builtin |
| [`zonedDateTimeToUtc`](./date/zonedDateTimeToUtc.md) | Giải quyết local wall-clock datetime tại timezone thành UTC instant | ⭐⭐⭐ | ✅ done | ⬜ todo |

## Error / Result

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`appError`](./error/appError.md) | Lỗi chuẩn có code/status/details | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`result`](./error/result.md) | Result pattern Ok/Fail | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`tryCatch`](./error/tryCatch.md) | Trả tuple error/data thay cho try/catch lặp lại | ⭐⭐ | ⬜ todo | ⬜ todo |

## format

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`formatCompactNumber`](./format/formatCompactNumber.md) | Định dạng số rút gọn 1K, 1M theo locale | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatDuration`](./format/formatDuration.md) | Định dạng thời lượng milliseconds sang HH:mm:ss | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatFileSize`](./format/formatFileSize.md) | Định dạng dung lượng theo hệ 1024 hoặc 1000 | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatList`](./format/formatList.md) | Nối danh sách bằng dấu phân cách phù hợp ngôn ngữ | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatOrdinal`](./format/formatOrdinal.md) | Định dạng số thứ tự theo locale (ví dụ 1st) | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatPercent`](./format/formatPercent.md) | Định dạng tỷ lệ thành phần trăm theo locale | ⭐⭐ | ✅ done | ⬜ todo |
| [`formatPhoneVN`](./format/formatPhoneVN.md) | Chuẩn hóa và hiển thị số di động Việt Nam theo nhóm | ⭐⭐ | ✅ done | ⬜ todo |
| [`padNumber`](./format/padNumber.md) | Đệm số bằng số 0 theo độ dài cố định | ⭐⭐ | ✅ done | ⬜ todo |

## Number & Format

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`clamp`](./number/clamp.md) | Giới hạn số trong khoảng min-max | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`formatBytes`](./number/formatBytes.md) | Định dạng byte thành KB/MB/GB | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`formatCurrency`](./number/formatCurrency.md) | Định dạng tiền tệ bằng locale/currency | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`formatNumber`](./number/formatNumber.md) | Định dạng số và phân cách hàng nghìn | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`percent`](./number/percent.md) | Tính phần trăm an toàn | ⭐ | ⬜ todo | ⬜ todo |
| [`randomInt`](./number/randomInt.md) | Sinh số nguyên ngẫu nhiên trong khoảng | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`round`](./number/round.md) | Làm tròn đến n chữ số thập phân | ⭐⭐ | ⬜ todo | ⬜ todo |

## Object

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`deepClone`](./object/deepClone.md) | Sao chép sâu object/array | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`deepMerge`](./object/deepMerge.md) | Gộp sâu config/options | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`diffObjects`](./object/diffObjects.md) | Liệt kê thay đổi top-level trước/sau. | ⭐⭐ | ✅ done | ⬜ todo |
| [`flattenObject`](./object/flattenObject.md) | Trải phẳng plain object thành các path có dấu chấm. | ⭐⭐ | ✅ done | ⬜ todo |
| [`get`](./object/get.md) | Truy cập value theo path a.b.c | ⭐⭐ | ✅ done | ⬜ todo |
| [`isEmpty`](./object/isEmpty.md) | Kiểm tra object/array/string rỗng | ⭐⭐ | ✅ done | ⬜ todo |
| [`isEqual`](./object/isEqual.md) | So sánh sâu hai value | ⭐⭐ | ✅ done | ⬜ todo |
| [`normalizeApiResponse`](./object/normalizeApiResponse.md) | Chuẩn hóa response thành {data,error,success} rõ ràng. | ⭐⭐ | ✅ done | ⬜ todo |
| [`omit`](./object/omit.md) | Bỏ một số field khỏi object | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`pick`](./object/pick.md) | Lấy một số field từ object | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`removeNullish`](./object/removeNullish.md) | Bỏ field null/undefined trước khi gửi API | ⭐⭐ | ✅ done | ⬜ todo |
| [`set`](./object/set.md) | Gán value theo path a.b.c | ⭐⭐ | ✅ done | ⬜ todo |
| [`unflattenObject`](./object/unflattenObject.md) | Khôi phục object từ flat paths. | ⭐⭐ | ✅ done | ⬜ todo |

## regex

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`escapeRegExp`](./regex/escapeRegExp.md) | Escape ký tự đặc biệt để tìm kiếm chuỗi literal an toàn | ⭐⭐ | ✅ done | ⬜ todo |
| [`extractEmails`](./regex/extractEmails.md) | Trích xuất email thông thường trong văn bản (không thay validation RFC) | ⭐⭐ | ✅ done | ⬜ todo |
| [`extractMatches`](./regex/extractMatches.md) | Lấy toàn bộ match kèm vị trí và groups | ⭐⭐ | ✅ done | ⬜ todo |
| [`getFirstMatch`](./regex/getFirstMatch.md) | Lấy match đầu tiên không ảnh hưởng lastIndex regex gốc | ⭐⭐ | ✅ done | ⬜ todo |
| [`isMatch`](./regex/isMatch.md) | Kiểm tra match regex với flags an toàn, tránh stateful global | ⭐⭐ | ✅ done | ⬜ todo |
| [`maskByPattern`](./regex/maskByPattern.md) | Che chuỗi bằng regex với nhóm capture định nghĩa trước | ⭐⭐ | ✅ done | ⬜ todo |
| [`normalizeWhitespace`](./regex/normalizeWhitespace.md) | Chuẩn hóa mọi whitespace Unicode về dấu cách đơn | ⭐⭐ | ✅ done | ⬜ todo |
| [`replaceAllRegex`](./regex/replaceAllRegex.md) | Thay thế chuỗi theo regex, mặc định thay toàn bộ | ⭐⭐ | ✅ done | ⬜ todo |
| [`validatePattern`](./regex/validatePattern.md) | Biên dịch và kiểm tra tính hợp lệ cú pháp regex | ⭐⭐ | ✅ done | ⬜ todo |

## Security / ID

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`base64Decode`](./security/base64Decode.md) | Decode Base64 hỗ trợ Unicode | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`base64Encode`](./security/base64Encode.md) | Encode Base64 hỗ trợ Unicode | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`base64UrlDecode`](./security/base64UrlDecode.md) | Giải mã Base64URL UTF-8 strict. | ⭐⭐ | ✅ done | ⬜ todo |
| [`base64UrlEncode`](./security/base64UrlEncode.md) | Mã hóa Unicode UTF-8 sang Base64URL không padding. | ⭐⭐ | ✅ done | ⬜ todo |
| [`bytesToHex`](./security/bytesToHex.md) | Chuyển bytes sang hex lowercase. | ⭐⭐ | ✅ done | ⬜ todo |
| [`constantTimeEqual`](./security/constantTimeEqual.md) | So sánh byte arrays theo vòng lặp tránh short-circuit. | ⭐⭐ | ✅ done | ⬜ todo |
| [`escapeHtml`](./security/escapeHtml.md) | Escape HTML khi render text | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`generateSecureToken`](./security/generateSecureToken.md) | Sinh token random mật mã dạng hex. | ⭐⭐ | ✅ done | ⬜ todo |
| [`hash`](./security/hash.md) | Băm chuỗi SHA-256 | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`hashSha256`](./security/hashSha256.md) | Tính SHA-256 hex của văn bản UTF-8. | ⭐⭐ | ✅ done | ⬜ todo |
| [`hexToBytes`](./security/hexToBytes.md) | Giải mã hex strict sang Uint8Array. | ⭐⭐ | ✅ done | ⬜ todo |
| [`hmacSha256`](./security/hmacSha256.md) | Ký HMAC-SHA256 UTF-8 với secret được cung cấp, trả hex. | ⭐⭐ | ✅ done | ⬜ todo |
| [`parseJwtPayload`](./security/parseJwtPayload.md) | Chỉ decode JSON payload JWT, KHÔNG xác minh chữ ký. | ⭐⭐ | ✅ done | ⬜ todo |
| [`redactSensitiveData`](./security/redactSensitiveData.md) | Che các field nhạy cảm trong JSON/object dùng cho log. | ⭐⭐ | ✅ done | ⬜ todo |
| [`sanitizeFilename`](./security/sanitizeFilename.md) | Chuẩn hóa filename, bỏ path/control chars và tên đặc biệt. | ⭐⭐ | ✅ done | ⬜ todo |
| [`uuid`](./security/uuid.md) | Sinh UUID v4 bằng secure random | ⭐⭐⭐ | ✅ done | 🧩 builtin |

## String

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`camelCase`](./string/camelCase.md) | Đổi chuỗi sang camelCase | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`capitalize`](./string/capitalize.md) | Viết hoa chữ cái đầu | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isBlank`](./string/isBlank.md) | Kiểm tra null/rỗng/chỉ có khoảng trắng | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`kebabCase`](./string/kebabCase.md) | Đổi chuỗi sang kebab-case | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`maskString`](./string/maskString.md) | Che một phần chuỗi như email, điện thoại hoặc thẻ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`randomString`](./string/randomString.md) | Sinh chuỗi ngẫu nhiên | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`removeAccents`](./string/removeAccents.md) | Bỏ dấu tiếng Việt, hữu ích cho search | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`slugify`](./string/slugify.md) | Tạo slug URL, bỏ dấu tiếng Việt | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`snakeCase`](./string/snakeCase.md) | Đổi chuỗi sang snake_case | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`titleCase`](./string/titleCase.md) | Viết hoa chữ cái đầu mỗi từ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`truncate`](./string/truncate.md) | Cắt chuỗi theo độ dài tối đa và thêm hậu tố | ⭐⭐⭐ | ✅ done | ⬜ todo |

## URL / HTTP

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`buildQueryString`](./url/buildQueryString.md) | Chuyển object thành query string | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`downloadFile`](./url/downloadFile.md) | Tải file từ blob/URL | ⭐⭐ | ⬜ todo | ➖ n/a |
| [`httpClient`](./url/httpClient.md) | Wrapper fetch cho base URL, token, timeout và lỗi chuẩn | ⭐⭐⭐ | ⬜ todo | ⬜ todo |
| [`joinUrl`](./url/joinUrl.md) | Nối URL không tạo slash dư | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`parseQueryString`](./url/parseQueryString.md) | Chuyển query string thành object | ⭐⭐⭐ | ✅ done | ⬜ todo |

## Validation

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`isCCCD`](./validation/isCCCD.md) | Kiểm tra định dạng CCCD 12 chữ số, không xác minh cấp phát | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isEmail`](./validation/isEmail.md) | Kiểm tra email theo quy tắc thực dụng | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isHexColor`](./validation/isHexColor.md) | Kiểm tra mã màu #RGB, #RGBA, #RRGGBB, #RRGGBBAA | ⭐⭐ | ✅ done | ⬜ todo |
| [`isIPv4`](./validation/isIPv4.md) | Kiểm tra IPv4 dotted-decimal, không chấp nhận leading zero | ⭐⭐ | ✅ done | ⬜ todo |
| [`isIPv6`](./validation/isIPv6.md) | Kiểm tra IPv6 đầy đủ/rút gọn và IPv4-mapped | ⭐⭐ | ✅ done | ⬜ todo |
| [`isISODate`](./validation/isISODate.md) | Kiểm tra ngày ISO YYYY-MM-DD tồn tại thực sự | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isISODateTime`](./validation/isISODateTime.md) | Kiểm tra timestamp ISO 8601 có timezone Z hoặc offset; kiểm tra ngày/giờ thực | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isNumeric`](./validation/isNumeric.md) | Kiểm tra chuỗi có phải số | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isPhoneVN`](./validation/isPhoneVN.md) | Kiểm tra số di động Việt Nam | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isRgbColor`](./validation/isRgbColor.md) | Kiểm tra rgb() và rgba() với kênh nguyên 0–255 và alpha 0–1 | ⭐⭐ | ✅ done | ⬜ todo |
| [`isStrongPassword`](./validation/isStrongPassword.md) | Kiểm tra mật khẩu có ít nhất 8 ký tự, chữ hoa, chữ thường, số và ký tự đặc biệt | ⭐⭐ | ✅ done | ⬜ todo |
| [`isTaxCode`](./validation/isTaxCode.md) | Kiểm tra cấu trúc mã số thuế Việt Nam 10 hoặc 13 chữ số và checksum | ⭐⭐ | ✅ done | ⬜ todo |
| [`isTime24h`](./validation/isTime24h.md) | Kiểm tra giờ 24h HH:mm hoặc HH:mm:ss | ⭐⭐ | ✅ done | ⬜ todo |
| [`isUrl`](./validation/isUrl.md) | Kiểm tra URL hợp lệ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isUsername`](./validation/isUsername.md) | Kiểm tra username 3–32 ký tự ASCII, bắt đầu bằng chữ, cho phép số và dấu gạch dưới | ⭐⭐ | ✅ done | ⬜ todo |
| [`isUUID`](./validation/isUUID.md) | Kiểm tra UUID RFC 4122 dạng canonical (version 1–8, variant RFC) | ⭐⭐ | ✅ done | ⬜ todo |
| [`isVietnamLicensePlate`](./validation/isVietnamLicensePlate.md) | Kiểm tra định dạng biển xe Việt Nam phổ biến, không tra cứu biển số thực tế | ⭐⭐ | ✅ done | ⬜ todo |
| [`isVietnamPostalCode`](./validation/isVietnamPostalCode.md) | Kiểm tra mã bưu chính Việt Nam 5 chữ số theo cấu trúc, không tra cứu danh mục | ⭐⭐ | ✅ done | ⬜ todo |

