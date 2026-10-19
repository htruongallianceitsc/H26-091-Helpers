/** Lập chỉ mục theo khóa, phần tử cuối ghi đè. */
export function keyBy(items,keySelector){
 if(!Array.isArray(items)||typeof keySelector!=='function')throw new TypeError('Cần items và keySelector');
 return new Map(items.map(item=>[keySelector(item),item]));
}
