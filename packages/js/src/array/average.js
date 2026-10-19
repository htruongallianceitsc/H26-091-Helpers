/** Tính trung bình, mảng rỗng trả về null. */
import { sumBy } from './sumBy.js';
export function average(items,selector=x=>x){if(!Array.isArray(items))throw new TypeError('Cần mảng');return items.length?sumBy(items,selector)/items.length:null;}
