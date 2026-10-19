import { convertTimeZone } from './convertTimeZone.js';
/** Khoảng nửa mở [start,end), ví dụ 09:00-12:00 và 13:00-18:00. */
export function isWithinWorkingHours(input,{timeZone='Asia/Ho_Chi_Minh',slots=[['09:00','12:00'],['13:00','18:00']],weekendDays=[0,6],holidays=[]}={}) {
 const p=convertTimeZone(input,timeZone), day=new Date(Date.UTC(p.year,p.month-1,p.day)).getUTCDay();
 const date=`${p.year}-${String(p.month).padStart(2,'0')}-${String(p.day).padStart(2,'0')}`;
 if(weekendDays.includes(day)||holidays.includes(date))return false;
 const minutes=p.hour*60+p.minute;
 return slots.some(([a,b])=>{const toM=s=>{if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(s))throw new RangeError('slot HH:mm không hợp lệ');return Number(s.slice(0,2))*60+Number(s.slice(3));};const start=toM(a),end=toM(b);if(start>=end)throw new RangeError('slot phải tăng');return minutes>=start&&minutes<end;});
}
