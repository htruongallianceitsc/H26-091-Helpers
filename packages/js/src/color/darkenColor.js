import { parseColor, rgbToHslRaw, hslToRgbRaw, toHex } from './_color.js';
/** Giảm độ sáng HSL với amount 0..1.
 * @param {any} input - Xem signature trong catalog.
 */
export function darkenColor(color,amount){if(!Number.isFinite(amount)||amount<0||amount>1)throw new RangeError('amount 0..1');const c=parseColor(color),h=rgbToHslRaw(c);return toHex({...hslToRgbRaw(h.h,h.s,Math.max(0,h.l-amount*100)),a:c.a},c.a!==1);}
