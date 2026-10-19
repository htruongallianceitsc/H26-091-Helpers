import { asDate } from './_internal.js';
/** 23:59:59.999 theo múi giờ local của runtime. */
export function endOfDay(input) { const d=asDate(input); d.setHours(23,59,59,999); return d; }
