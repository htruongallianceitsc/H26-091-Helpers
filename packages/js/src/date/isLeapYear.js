import { asDate } from './_internal.js';
/** Kiểm tra năm nhuận Gregorian. */
export function isLeapYear(input) { const y=typeof input==='number'?input:asDate(input).getFullYear(); if(!Number.isInteger(y))throw new RangeError('year không hợp lệ'); return y%4===0 && (y%100!==0||y%400===0); }
