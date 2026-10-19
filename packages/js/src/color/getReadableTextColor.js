import { contrastRatio } from './contrastRatio.js';
/** Chọn màu chữ sáng/tối theo độ tương phản lớn hơn.
 * @param {any} input - Xem signature trong catalog.
 */
export function getReadableTextColor(background,light='#ffffff',dark='#000000'){return contrastRatio(light,background)>=contrastRatio(dark,background)?light:dark;}
