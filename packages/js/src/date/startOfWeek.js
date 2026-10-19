import { asDate } from './_internal.js';
/** Đầu tuần local; mặc định thứ Hai (weekStartsOn=1), Sunday=0. */
export function startOfWeek(input,weekStartsOn=1) { if(!Number.isInteger(weekStartsOn)||weekStartsOn<0||weekStartsOn>6)throw new RangeError('weekStartsOn không hợp lệ'); const d=asDate(input); const diff=(d.getDay()-weekStartsOn+7)%7; d.setDate(d.getDate()-diff); d.setHours(0,0,0,0); return d; }
