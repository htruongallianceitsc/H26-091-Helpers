# padNumber

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Đệm số bằng số 0 theo độ dài cố định

## Signature

```text
padNumber(...args) => value
```

## Ví dụ

- Input: `"See tests"` → Output: `"See tests"`

## Edge cases

- invalid input
- empty input
- Unicode and locale

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Đệm số bằng số 0 theo độ dài cố định */
export function padNumber(value, width = 2) {
  if (!Number.isSafeInteger(value) || !Number.isInteger(width) || width < 1 || width > 100) throw new RangeError('Invalid value/width');
  return `${value < 0 ? '-' : ''}${String(Math.abs(value)).padStart(width,'0')}`;
}
```

```text [C#]
Status: todo
```

:::

