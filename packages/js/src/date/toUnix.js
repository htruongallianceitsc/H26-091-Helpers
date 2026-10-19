import { asDate } from './_internal.js';
/** Unix timestamp theo seconds (mặc định) hoặc milliseconds. */
export function toUnix(input, unit='seconds') { const ms=asDate(input).getTime(); if(unit==='milliseconds')return ms; if(unit==='seconds')return Math.floor(ms/1000); throw new RangeError('unit phải là seconds hoặc milliseconds'); }
