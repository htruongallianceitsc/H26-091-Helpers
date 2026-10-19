import { contrastRatio } from './contrastRatio.js';
/** Kiểm tra tương phản WCAG 2.x cho văn bản thường/lớn.
 * @param {any} input - Xem signature trong catalog.
 */
export function meetsWcagContrast(fg,bg,level='AA',largeText=false){if(!['AA','AAA'].includes(level))throw new RangeError('level must be AA or AAA');return contrastRatio(fg,bg)>=(level==='AA'?(largeText?3:4.5):(largeText?4.5:7));}
