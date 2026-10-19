import { asDate, finiteNumber } from './_internal.js';
/** Cộng tháng, clamp ngày cuối tháng (31/01 + 1 tháng -> 28/02). */
export function addMonths(input,months) { finiteNumber(months,'months'); if(!Number.isInteger(months))throw new RangeError('months phải là số nguyên'); const d=asDate(input),day=d.getDate(); d.setDate(1); d.setMonth(d.getMonth()+months); const last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(); d.setDate(Math.min(day,last)); return d; }
