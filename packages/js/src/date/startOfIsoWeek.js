import { asDate } from './_internal.js';
/** Lấy thứ Hai 00:00 theo local timezone. */
export function startOfIsoWeek(input) { const d=asDate(input); d.setHours(0,0,0,0); d.setDate(d.getDate()-((d.getDay()+6)%7)); return d; }
