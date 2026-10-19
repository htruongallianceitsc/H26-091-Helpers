import { parseColor, toHex } from './_color.js';
/** Chuẩn hóa HEX/RGB/RGBA về HEX, giữ alpha nếu có.
 * @param {any} input - Xem signature trong catalog.
 */
export function normalizeColor(color){const x=parseColor(color);return toHex(x,x.a!==1);}
