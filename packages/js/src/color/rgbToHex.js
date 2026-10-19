import { toHex } from './_color.js';
/** Chuyển RGB/RGBA sang HEX chuẩn lowercase.
 * @param {any} input - Xem signature trong catalog.
 */
export function rgbToHex(r,g,b,a){return toHex({r,g,b,a},a!==undefined);}
