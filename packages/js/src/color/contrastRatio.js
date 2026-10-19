import { parseColor, lum, opaque } from './_color.js';
/** Tính độ tương phản hai màu theo WCAG; hỗ trợ alpha foreground.
 * @param {any} input - Xem signature trong catalog.
 */
export function contrastRatio(foreground,background){const bg=parseColor(background);if(bg.a!==1)throw new RangeError('Background must be opaque');const A=lum(opaque(foreground,background)),B=lum(bg);return (Math.max(A,B)+0.05)/(Math.min(A,B)+0.05);}
