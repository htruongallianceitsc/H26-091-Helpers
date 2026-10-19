import { parseColor, rgbToHslRaw, hslToRgbRaw, toHex } from './_color.js';
/** Lấy màu bổ sung bằng cách xoay hue 180 độ.
 * @param {any} input - Xem signature trong catalog.
 */
export function complementaryColor(color){const c=parseColor(color),h=rgbToHslRaw(c);return toHex({...hslToRgbRaw(h.h+180,h.s,h.l),a:c.a},c.a!==1);}
