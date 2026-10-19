# fromUnix

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Unix timestamp sang Date (seconds hoặc milliseconds)

## Signature

```text
fromUnix(timestamp: number, unit?: string) => Date
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- invalid date và năm nhuận
- timezone, DST hoặc ranh giới ngày/tháng

## Trạng thái

- JavaScript: ✅ `done`
- C#: 🧩 `builtin`

## Ghi chú theo ngôn ngữ

- **csharp:** Dùng DateTimeOffset.ToUnixTimeSeconds/FromUnixTimeSeconds hoặc bản Milliseconds.

## Code

::: code-group

```js [JavaScript]
import { finiteNumber } from './_internal.js';
/** Parse Unix timestamp; unit phải được chỉ rõ khi dùng milliseconds. */
export function fromUnix(timestamp,unit='seconds') { finiteNumber(timestamp,'timestamp'); if(!['seconds','milliseconds'].includes(unit)) throw new RangeError('unit không hợp lệ'); const d=new Date(unit==='seconds'?timestamp*1000:timestamp); if(!Number.isFinite(d.getTime()))throw new RangeError('timestamp vượt giới hạn Date'); return d; }
```

```text [C#]
Dùng DateTimeOffset.ToUnixTimeSeconds/FromUnixTimeSeconds hoặc bản Milliseconds.
```

:::

