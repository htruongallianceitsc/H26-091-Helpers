import { asDate } from './_internal.js';
/** So sánh ngày lịch local, không so sánh timestamp. */
export function isSameDay(a,b) { const x=asDate(a),y=asDate(b); return x.getFullYear()===y.getFullYear() && x.getMonth()===y.getMonth() && x.getDate()===y.getDate(); }
