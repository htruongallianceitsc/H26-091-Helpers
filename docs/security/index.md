# Security / ID

| Helper | Mục đích | JS | C# |
| --- | --- | --- | --- |
| [base64Decode](./base64Decode.md) | Decode Base64 hỗ trợ Unicode | ⬜ todo | 🧩 builtin |
| [base64Encode](./base64Encode.md) | Encode Base64 hỗ trợ Unicode | ⬜ todo | 🧩 builtin |
| [base64UrlDecode](./base64UrlDecode.md) | Giải mã Base64URL UTF-8 strict. | ✅ done | ⬜ todo |
| [base64UrlEncode](./base64UrlEncode.md) | Mã hóa Unicode UTF-8 sang Base64URL không padding. | ✅ done | ⬜ todo |
| [bytesToHex](./bytesToHex.md) | Chuyển bytes sang hex lowercase. | ✅ done | ⬜ todo |
| [constantTimeEqual](./constantTimeEqual.md) | So sánh byte arrays theo vòng lặp tránh short-circuit. | ✅ done | ⬜ todo |
| [escapeHtml](./escapeHtml.md) | Escape HTML khi render text | ⬜ todo | ⬜ todo |
| [generateSecureToken](./generateSecureToken.md) | Sinh token random mật mã dạng hex. | ✅ done | ⬜ todo |
| [hash](./hash.md) | Băm chuỗi SHA-256 | ⬜ todo | 🧩 builtin |
| [hashSha256](./hashSha256.md) | Tính SHA-256 hex của văn bản UTF-8. | ✅ done | ⬜ todo |
| [hexToBytes](./hexToBytes.md) | Giải mã hex strict sang Uint8Array. | ✅ done | ⬜ todo |
| [hmacSha256](./hmacSha256.md) | Ký HMAC-SHA256 UTF-8 với secret được cung cấp, trả hex. | ✅ done | ⬜ todo |
| [parseJwtPayload](./parseJwtPayload.md) | Chỉ decode JSON payload JWT, KHÔNG xác minh chữ ký. | ✅ done | ⬜ todo |
| [redactSensitiveData](./redactSensitiveData.md) | Che các field nhạy cảm trong JSON/object dùng cho log. | ✅ done | ⬜ todo |
| [sanitizeFilename](./sanitizeFilename.md) | Chuẩn hóa filename, bỏ path/control chars và tên đặc biệt. | ✅ done | ⬜ todo |
| [uuid](./uuid.md) | Sinh UUID v4 bằng secure random | ✅ done | 🧩 builtin |
