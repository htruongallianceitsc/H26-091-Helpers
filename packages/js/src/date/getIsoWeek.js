import { asDate } from './_internal.js';
/** Trả ISO week-number và week-year; dùng UTC trên ngày lịch local để tránh DST. */
export function getIsoWeek(input) {
 const d=asDate(input), x=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));
 x.setUTCDate(x.getUTCDate()+4-(x.getUTCDay()||7));
 const year=x.getUTCFullYear(), jan1=Date.UTC(year,0,1);
 return {year,week:Math.ceil(((x.getTime()-jan1)/86400000+1)/7)};
}
