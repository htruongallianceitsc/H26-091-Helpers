/** Khôi phục object từ flat paths. */
export function unflattenObject(input) {
 if(input===null||typeof input!=='object'||Array.isArray(input))throw new TypeError('Cần object');
 const result={};
 for(const [path,value] of Object.entries(input)){
  const keys=path.split('.');if(keys.some(k=>!k||['__proto__','prototype','constructor'].includes(k)))throw new Error('Unsafe path');
  let cur=result;for(let i=0;i<keys.length;i++){
   const k=keys[i];if(i===keys.length-1){if(Object.hasOwn(cur,k))throw new Error('Path trùng');cur[k]=value;}
   else {if(!Object.hasOwn(cur,k))cur[k]={};else if(cur[k]===null||typeof cur[k]!=='object'||Array.isArray(cur[k]))throw new Error('Path conflict');cur=cur[k];}
  }
 }return result;
}
