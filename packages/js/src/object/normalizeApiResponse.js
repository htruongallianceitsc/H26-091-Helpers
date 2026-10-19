/** Chuẩn hóa response thành {data,error,success} rõ ràng. */
export function normalizeApiResponse(response) {
 if(response===null||typeof response!=='object'||Array.isArray(response))return {success:true,data:response,error:null};
 const success=typeof response.success==='boolean'?response.success:response.error==null;
 const data=Object.hasOwn(response,'data')?response.data:null;
 const error=success?null:(response.error??response.message??'Unknown error');
 return {success,data,error};
}
