import { asDate } from './_internal.js';
/** Đầu tháng theo local time. */
export function startOfMonth(input) { const d=asDate(input); d.setDate(1); d.setHours(0,0,0,0); return d; }
