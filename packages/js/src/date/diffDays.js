import { asDate, dayNumber } from './_internal.js';
/** Khoảng ngày lịch local: a - b, bỏ giờ và tránh lỗi DST. */
export function diffDays(a,b) { return dayNumber(asDate(a))-dayNumber(asDate(b)); }
