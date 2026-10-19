import { asDate } from './_internal.js';
/** 00:00:00.000 theo múi giờ local của runtime. */
export function startOfDay(input) { const d=asDate(input); d.setHours(0,0,0,0); return d; }
