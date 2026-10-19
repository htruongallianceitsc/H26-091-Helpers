import { parseColor, toHex } from './_color.js';
/** Trộn tuyến tính các kênh sRGB (không phải perceptual blend).
 * @param {any} input - Xem signature trong catalog.
 */
export function mixColors(colorA,colorB,weight=0.5){if(!Number.isFinite(weight)||weight<0||weight>1)throw new RangeError('weight 0..1');const a=parseColor(colorA),b=parseColor(colorB);return toHex({r:a.r*(1-weight)+b.r*weight,g:a.g*(1-weight)+b.g*weight,b:a.b*(1-weight)+b.b*weight,a:a.a*(1-weight)+b.a*weight},a.a!==1||b.a!==1);}
