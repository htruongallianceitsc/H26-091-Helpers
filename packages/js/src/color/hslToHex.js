import { hslToRgbRaw, toHex } from './_color.js';
/** Chuyển HSL sang HEX sRGB.
 * @param {any} input - Xem signature trong catalog.
 */
export function hslToHex(h,s,l){return toHex(hslToRgbRaw(h,s,l));}
