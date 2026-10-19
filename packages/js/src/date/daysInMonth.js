import { asDate } from './_internal.js';
/** Số ngày trong tháng, có xét năm nhuận. */
export function daysInMonth(input) { const d=asDate(input); return new Date(d.getFullYear(),d.getMonth()+1,0).getDate(); }
