# Helpers Checklist

> File này được sinh tự động từ `catalog/`. Không sửa tay.

Legend: ✅ done · 🟨 wip · ⬜ todo · 🧩 builtin · ➖ n/a

## Array / Collection

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`average`](./array/average.md) | Tính trung bình | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`chunk`](./array/chunk.md) | Chia mảng thành nhóm n phần tử | ⭐⭐⭐ | ✅ done | 🧩 builtin |
| [`difference`](./array/difference.md) | Lấy phần tử chỉ có ở mảng A | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`groupBy`](./array/groupBy.md) | Nhóm phần tử theo key | ⭐⭐⭐ | ✅ done | 🧩 builtin |
| [`intersection`](./array/intersection.md) | Lấy phần tử chung của hai mảng | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`keyBy`](./array/keyBy.md) | Chuyển mảng thành map theo key | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`paginate`](./array/paginate.md) | Phân trang mảng trong bộ nhớ | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`sortBy`](./array/sortBy.md) | Sắp xếp theo một hoặc nhiều key | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`sumBy`](./array/sumBy.md) | Tính tổng theo selector | ⭐⭐ | ⬜ todo | 🧩 builtin |
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
| [`addDays`](./date/addDays.md) | Cộng số ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`diffDays`](./date/diffDays.md) | Tính khoảng cách ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`endOfDay`](./date/endOfDay.md) | Lấy cuối ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`formatDate`](./date/formatDate.md) | Định dạng ngày theo pattern | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`fromUnix`](./date/fromUnix.md) | Chuyển Unix timestamp sang Date | ⭐ | ⬜ todo | 🧩 builtin |
| [`isSameDay`](./date/isSameDay.md) | Kiểm tra hai thời điểm cùng ngày | ⭐ | ⬜ todo | ⬜ todo |
| [`isWeekend`](./date/isWeekend.md) | Kiểm tra cuối tuần | ⭐ | ⬜ todo | ⬜ todo |
| [`startOfDay`](./date/startOfDay.md) | Lấy đầu ngày | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`timeAgo`](./date/timeAgo.md) | Hiển thị thời gian tương đối như 3 phút trước | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`toUnix`](./date/toUnix.md) | Chuyển Date sang Unix timestamp | ⭐ | ⬜ todo | 🧩 builtin |

## Error / Result

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`appError`](./error/appError.md) | Lỗi chuẩn có code/status/details | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`result`](./error/result.md) | Result pattern Ok/Fail | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`tryCatch`](./error/tryCatch.md) | Trả tuple error/data thay cho try/catch lặp lại | ⭐⭐ | ⬜ todo | ⬜ todo |

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
| [`get`](./object/get.md) | Truy cập value theo path a.b.c | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isEmpty`](./object/isEmpty.md) | Kiểm tra object/array/string rỗng | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isEqual`](./object/isEqual.md) | So sánh sâu hai value | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`omit`](./object/omit.md) | Bỏ một số field khỏi object | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`pick`](./object/pick.md) | Lấy một số field từ object | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`removeNullish`](./object/removeNullish.md) | Bỏ field null/undefined trước khi gửi API | ⭐⭐ | ✅ done | ⬜ todo |
| [`set`](./object/set.md) | Gán value theo path a.b.c | ⭐⭐ | ⬜ todo | ⬜ todo |

## Security / ID

| Helper | Mục đích | Ưu tiên | JS | C# |
| --- | --- | :---: | :---: | :---: |
| [`base64Decode`](./security/base64Decode.md) | Decode Base64 hỗ trợ Unicode | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`base64Encode`](./security/base64Encode.md) | Encode Base64 hỗ trợ Unicode | ⭐⭐ | ⬜ todo | 🧩 builtin |
| [`escapeHtml`](./security/escapeHtml.md) | Escape HTML khi render text | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`hash`](./security/hash.md) | Băm chuỗi SHA-256 | ⭐⭐ | ⬜ todo | 🧩 builtin |
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
| [`isCCCD`](./validation/isCCCD.md) | Kiểm tra định dạng CCCD Việt Nam | ⭐ | ⬜ todo | ⬜ todo |
| [`isEmail`](./validation/isEmail.md) | Kiểm tra email theo quy tắc thực dụng | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isNumeric`](./validation/isNumeric.md) | Kiểm tra chuỗi có phải số | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isPhoneVN`](./validation/isPhoneVN.md) | Kiểm tra số di động Việt Nam | ⭐⭐⭐ | ✅ done | ⬜ todo |
| [`isStrongPassword`](./validation/isStrongPassword.md) | Kiểm tra độ mạnh mật khẩu | ⭐⭐ | ⬜ todo | ⬜ todo |
| [`isTaxCode`](./validation/isTaxCode.md) | Kiểm tra định dạng mã số thuế Việt Nam | ⭐ | ⬜ todo | ⬜ todo |
| [`isUrl`](./validation/isUrl.md) | Kiểm tra URL hợp lệ | ⭐⭐ | ⬜ todo | ⬜ todo |

