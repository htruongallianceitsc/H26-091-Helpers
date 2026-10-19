import { rgbToHslRaw, parseColor } from './_color.js';
/** Chuyển màu HEX/RGB sang HSL.
 * @param {any} input - Xem signature trong catalog.
 */
export function hexToHsl(color){return rgbToHslRaw(parseColor(color));}
