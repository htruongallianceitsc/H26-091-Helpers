import { parseColor, lum } from './_color.js';
/** Tính luminance tương đối sRGB theo WCAG.
 * @param {any} input - Xem signature trong catalog.
 */
export function getLuminance(color){const x=parseColor(color);if(x.a!==1)throw new RangeError('Color must be opaque');return lum(x);}
