import { asDate } from './_internal.js';
/** Thứ bảy và chủ nhật, theo múi giờ local. */
export function isWeekend(input) { return [0,6].includes(asDate(input).getDay()); }
