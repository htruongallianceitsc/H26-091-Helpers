import { asDate } from './_internal.js';
import { isBusinessDay } from './isBusinessDay.js';
/** Cộng số ngày làm việc (ngày bắt đầu không tính); giới hạn tránh vòng lặp vô hạn. */
export function addBusinessDays(input,days,options={}) {
 if(!Number.isInteger(days)||Math.abs(days)>100000) throw new RangeError('days phải là số nguyên trong giới hạn');
 const d=asDate(input); if(!days) return d;
 if((options.weekendDays??[0,6]).length===7) throw new RangeError('Không tồn tại ngày làm việc');
 const sign=Math.sign(days);let remaining=Math.abs(days),steps=0;
 while(remaining>0){if(++steps>365000)throw new RangeError('Không tìm thấy ngày làm việc');d.setDate(d.getDate()+sign);if(isBusinessDay(d,options))remaining--;}
 return d;
}
