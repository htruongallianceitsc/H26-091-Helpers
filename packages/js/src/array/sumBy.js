/** Tính tổng theo selector. */
export function sumBy(items,selector=x=>x){if(!Array.isArray(items)||typeof selector!=='function')throw new TypeError('Input không hợp lệ');return items.reduce((sum,item)=>{const value=selector(item);if(typeof value!=='number'||!Number.isFinite(value))throw new TypeError('Giá trị phải là số hữu hạn');return sum+value;},0);}
