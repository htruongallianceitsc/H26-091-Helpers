import { parseColor } from './_color.js';
/** Đọc màu HEX 3/4/6/8 chữ số thành RGBA.
 * @param {any} input - Xem signature trong catalog.
 */
export function hexToRgb(hex){const c=parseColor(hex);return c;}
