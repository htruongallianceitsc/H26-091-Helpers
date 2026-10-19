import { startOfWeek } from './startOfWeek.js';
/** Cuối tuần local (23:59:59.999). */
export function endOfWeek(input,weekStartsOn=1) { const d=startOfWeek(input,weekStartsOn); d.setDate(d.getDate()+6); d.setHours(23,59,59,999); return d; }
