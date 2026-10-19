import { parseColor } from './_color.js';
/** Kiểm tra cú pháp màu HEX/RGB/RGBA được hỗ trợ.
 * @param {any} input - Xem signature trong catalog.
 */
export function isValidColor(value){try{parseColor(value);return true;}catch{return false;}}
