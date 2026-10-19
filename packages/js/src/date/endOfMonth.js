import { asDate } from './_internal.js';
/** Cuối tháng theo local time. */
export function endOfMonth(input) { const d=asDate(input); d.setDate(1); d.setMonth(d.getMonth()+1); d.setDate(0); d.setHours(23,59,59,999); return d; }
