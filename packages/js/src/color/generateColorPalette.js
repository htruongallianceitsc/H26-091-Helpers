import { parseColor, rgbToHslRaw, hslToRgbRaw, toHex } from './_color.js';
/** Sinh dải màu HSL từ sáng đến tối, cố định hue/saturation.
 * @param {any} input - Xem signature trong catalog.
 */
export function generateColorPalette(color,steps=5){if(!Number.isInteger(steps)||steps<2||steps>50)throw new RangeError('steps must be 2..50');const c=parseColor(color),h=rgbToHslRaw(c);return Array.from({length:steps},(_,i)=>toHex({...hslToRgbRaw(h.h,h.s,95-(i*90)/(steps-1)),a:c.a},c.a!==1));}
