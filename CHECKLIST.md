# Helpers Checklist

> File này được sinh tự động từ `catalog/`. Không sửa tay.

Legend: ✅ done · 🟨 wip · ⬜ todo · 🧩 builtin · ➖ n/a

## Array / Collection

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`average`](./docs/array/average.md) | Tính trung bình | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`chunk`](./docs/array/chunk.md) | Chia mảng thành nhóm n phần tử | ⭐⭐⭐ | ✅ done | 🧩 builtin |
| [`difference`](./docs/array/difference.md) | Lấy phần tử chỉ có ở mảng A | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`groupBy`](./docs/array/groupBy.md) | Nhóm phần tử theo key | ⭐⭐⭐ | ✅ done | 🧩 builtin |
| [`intersection`](./docs/array/intersection.md) | Lấy phần tử chung của hai mảng | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`keyBy`](./docs/array/keyBy.md) | Chuyển mảng thành map theo key | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`paginate`](./docs/array/paginate.md) | Phân trang mảng trong bộ nhớ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`sortBy`](./docs/array/sortBy.md) | Sắp xếp theo một hoặc nhiều key | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`sumBy`](./docs/array/sumBy.md) | Tính tổng theo selector | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`uniqueBy`](./docs/array/uniqueBy.md) | Loại trùng theo key, giữ phần tử đầu tiên | ⭐⭐⭐ | ✅ done | ⬜ todo |

## Async / Function

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`debounce`](./docs/async/debounce.md) | Trì hoãn gọi hàm cho ô search/input | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`memoize`](./docs/async/memoize.md) | Cache kết quả hàm | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`once`](./docs/async/once.md) | Chỉ cho hàm chạy một lần | ⭐ | ⬜ todo | ⬜ todo |
| [`promisePool`](./docs/async/promisePool.md) | Giới hạn số promise chạy song song | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`retry`](./docs/async/retry.md) | Thử lại khi lỗi với exponential backoff | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`sleep`](./docs/async/sleep.md) | Chờ n mili-giây | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`throttle`](./docs/async/throttle.md) | Giới hạn tần suất gọi hàm | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`withTimeout`](./docs/async/withTimeout.md) | Giới hạn thời gian promise | ⭐⭐ | ⬜ todo | ⬜ todo |

## Browser / DOM

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`cookie`](./docs/browser/cookie.md) | Đọc/ghi cookie | ⭐⭐ | ⬜ todo | ➖ n/a |
| [`copyToClipboard`](./docs/browser/copyToClipboard.md) | Sao chép text qua Clipboard API | ⭐⭐⭐ | ✅ done | ➖ n/a |
| [`isInViewport`](./docs/browser/isInViewport.md) | Kiểm tra element trong viewport | ⭐ | ⬜ todo | ➖ n/a |
| [`scrollToTop`](./docs/browser/scrollToTop.md) | Cuộn về đầu trang | ⭐ | ⬜ todo | ➖ n/a |
| [`storage`](./docs/browser/storage.md) | Wrapper localStorage có JSON và hạn dùng | ⭐⭐ | ⬜ todo | ➖ n/a |

## Config / Logging

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`getEnv`](./docs/config/getEnv.md) | Đọc biến môi trường có default và ép kiểu | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`logger`](./docs/config/logger.md) | Logger có level và timestamp | ⭐⭐ | ⬜ todo | ⬜ todo |

## Date / Time

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`addDays`](./docs/date/addDays.md) | Cộng số ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`diffDays`](./docs/date/diffDays.md) | Tính khoảng cách ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`endOfDay`](./docs/date/endOfDay.md) | Lấy cuối ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`formatDate`](./docs/date/formatDate.md) | Định dạng ngày theo pattern | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`fromUnix`](./docs/date/fromUnix.md) | Chuyển Unix timestamp sang Date | ⭐ | ⬜ todo | 🧩 builtin |
| [`isSameDay`](./docs/date/isSameDay.md) | Kiểm tra hai thời điểm cùng ngày | ⭐ | ⬜ todo | ⬜ todo |
| [`isWeekend`](./docs/date/isWeekend.md) | Kiểm tra cuối tuần | ⭐ | ⬜ todo | ⬜ todo |
| [`startOfDay`](./docs/date/startOfDay.md) | Lấy đầu ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`timeAgo`](./docs/date/timeAgo.md) | Hiển thị thời gian tương đối như 3 phút trước | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`toUnix`](./docs/date/toUnix.md) | Chuyển Date sang Unix timestamp | ⭐ | ⬜ todo | 🧩 builtin |

## Error / Result

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`appError`](./docs/error/appError.md) | Lỗi chuẩn có code/status/details | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`result`](./docs/error/result.md) | Result pattern Ok/Fail | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`tryCatch`](./docs/error/tryCatch.md) | Trả tuple error/data thay cho try/catch lặp lại | ⭐⭐ | ⬜ todo | ⬜ todo |

## Number & Format

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`clamp`](./docs/number/clamp.md) | Giới hạn số trong khoảng min-max | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`formatBytes`](./docs/number/formatBytes.md) | Định dạng byte thành KB/MB/GB | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`formatCurrency`](./docs/number/formatCurrency.md) | Định dạng tiền tệ bằng locale/currency | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`formatNumber`](./docs/number/formatNumber.md) | Định dạng số và phân cách hàng nghìn | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`percent`](./docs/number/percent.md) | Tính phần trăm an toàn | ⭐ | ⬜ todo | ⬜ todo |
| [`randomInt`](./docs/number/randomInt.md) | Sinh số nguyên ngẫu nhiên trong khoảng | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`round`](./docs/number/round.md) | Làm tròn đến n chữ số thập phân | ⭐⭐ | ⬜ todo | ⬜ todo |

## Object

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`deepClone`](./docs/object/deepClone.md) | Sao chép sâu object/array | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`deepMerge`](./docs/object/deepMerge.md) | Gộp sâu config/options | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`get`](./docs/object/get.md) | Truy cập value theo path a.b.c | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isEmpty`](./docs/object/isEmpty.md) | Kiểm tra object/array/string rỗng | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isEqual`](./docs/object/isEqual.md) | So sánh sâu hai value | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`omit`](./docs/object/omit.md) | Bỏ một số field khỏi object | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`pick`](./docs/object/pick.md) | Lấy một số field từ object | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`removeNullish`](./docs/object/removeNullish.md) | Bỏ field null/undefined trước khi gửi API | ⭐⭐ | ✅ done | ⬜ todo |
| [`set`](./docs/object/set.md) | Gán value theo path a.b.c | ⭐⭐ | ⬜ todo | ⬜ todo |

## Security / ID

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`base64Decode`](./docs/security/base64Decode.md) | Decode Base64 hỗ trợ Unicode | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`base64Encode`](./docs/security/base64Encode.md) | Encode Base64 hỗ trợ Unicode | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`escapeHtml`](./docs/security/escapeHtml.md) | Escape HTML khi render text | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`hash`](./docs/security/hash.md) | Băm chuỗi SHA-256 | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`uuid`](./docs/security/uuid.md) | Sinh UUID v4 bằng secure random | ⭐⭐⭐ | ✅ done | 🧩 builtin |

## String

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`camelCase`](./docs/string/camelCase.md) | Đổi chuỗi sang camelCase | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`capitalize`](./docs/string/capitalize.md) | Viết hoa chữ cái đầu | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isBlank`](./docs/string/isBlank.md) | Kiểm tra null/rỗng/chỉ có khoảng trắng | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`kebabCase`](./docs/string/kebabCase.md) | Đổi chuỗi sang kebab-case | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`maskString`](./docs/string/maskString.md) | Che một phần chuỗi như email, điện thoại hoặc thẻ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`randomString`](./docs/string/randomString.md) | Sinh chuỗi ngẫu nhiên | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`removeAccents`](./docs/string/removeAccents.md) | Bỏ dấu tiếng Việt, hữu ích cho search | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`slugify`](./docs/string/slugify.md) | Tạo slug URL, bỏ dấu tiếng Việt | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`snakeCase`](./docs/string/snakeCase.md) | Đổi chuỗi sang snake_case | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`titleCase`](./docs/string/titleCase.md) | Viết hoa chữ cái đầu mỗi từ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`truncate`](./docs/string/truncate.md) | Cắt chuỗi theo độ dài tối đa và thêm hậu tố | ⭐⭐⭐ | ✅ done | ⬜ todo |

## URL / HTTP

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`buildQueryString`](./docs/url/buildQueryString.md) | Chuyển object thành query string | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`downloadFile`](./docs/url/downloadFile.md) | Tải file từ blob/URL | ⭐⭐ | ⬜ todo | ➖ n/a |
| [`httpClient`](./docs/url/httpClient.md) | Wrapper fetch cho base URL, token, timeout và lỗi chuẩn | ⭐⭐⭐ | ⬜ todo | ⬜ todo |
| [`joinUrl`](./docs/url/joinUrl.md) | Nối URL không tạo slash dư | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`parseQueryString`](./docs/url/parseQueryString.md) | Chuyển query string thành object | ⭐⭐⭐ | ✅ done | ⬜ todo |

## Validation

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`isCCCD`](./docs/validation/isCCCD.md) | Kiểm tra định dạng CCCD Việt Nam | ⭐ | ⬜ todo | ⬜ todo |
| [`isEmail`](./docs/validation/isEmail.md) | Kiểm tra email theo quy tắc thực dụng | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isNumeric`](./docs/validation/isNumeric.md) | Kiểm tra chuỗi có phải số | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isPhoneVN`](./docs/validation/isPhoneVN.md) | Kiểm tra số di động Việt Nam | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isStrongPassword`](./docs/validation/isStrongPassword.md) | Kiểm tra độ mạnh mật khẩu | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isTaxCode`](./docs/validation/isTaxCode.md) | Kiểm tra định dạng mã số thuế Việt Nam | ⭐ | ⬜ todo | ⬜ todo |
| [`isUrl`](./docs/validation/isUrl.md) | Kiểm tra URL hợp lệ | ⭐⭐ | ⬜ todo | ⬜ todo |

