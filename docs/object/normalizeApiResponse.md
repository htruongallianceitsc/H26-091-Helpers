# normalizeApiResponse

> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.

## Mô tả

Chuẩn hóa response thành {data,error,success} rõ ràng.

## Signature

```text
normalizeApiResponse(response) => object
```

## Ví dụ

- Chưa khai báo ví dụ trong metadata.

## Edge cases

- null, empty, invalid inputs

## Trạng thái

- JavaScript: ✅ `done`
- C#: ⬜ `todo`

## Code

::: code-group

```js [JavaScript]
/** Chuẩn hóa response thành {data,error,success} rõ ràng. */
export function normalizeApiResponse(response) {
 if(response===null||typeof response!=='object'||Array.isArray(response))return {success:true,data:response,error:null};
 const success=typeof response.success==='boolean'?response.success:response.error==null;
 const data=Object.hasOwn(response,'data')?response.data:null;
 const error=success?null:(response.error??response.message??'Unknown error');
 return {success,data,error};
}
```

```text [C#]
Status: todo
```

:::

