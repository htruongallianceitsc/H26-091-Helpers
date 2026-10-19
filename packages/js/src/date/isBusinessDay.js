import { asDate } from './_internal.js';
/** options: weekendDays (0=CN), holidays (YYYY-MM-DD). */
export function isBusinessDay(input,{weekendDays=[0,6],holidays=[]}={}) {
 const d=asDate(input), key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
 if(!Array.isArray(weekendDays)||weekendDays.some(x=>!Number.isInteger(x)||x<0||x>6)) throw new RangeError('weekendDays không hợp lệ');
 return !weekendDays.includes(d.getDay())&&!holidays.includes(key);
}
