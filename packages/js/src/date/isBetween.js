import { asDate } from './_internal.js';
/** Kiểm tra thời điểm trong khoảng [start, end] (inclusive). */
export function isBetween(input,start,end,inclusive=true) { const t=asDate(input).getTime(),a=asDate(start).getTime(),b=asDate(end).getTime(); if(a>b)throw new RangeError('start không thể sau end'); return inclusive?t>=a&&t<=b:t>a&&t<b; }
