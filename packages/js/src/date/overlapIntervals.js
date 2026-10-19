import { asDate } from './_internal.js';
/** Khoảng [start,end) có end > start, giao điểm đơn không tính là giao. */
export function overlapIntervals(a,b) {
 const x1=asDate(a.start).getTime(),x2=asDate(a.end).getTime(),y1=asDate(b.start).getTime(),y2=asDate(b.end).getTime();
 if(x1>x2||y1>y2)throw new RangeError('Khoảng không hợp lệ');
 const start=Math.max(x1,y1),end=Math.min(x2,y2);return start<end?{start:new Date(start),end:new Date(end)}:null;
}
