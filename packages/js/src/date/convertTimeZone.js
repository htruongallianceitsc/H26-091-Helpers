import { asDate } from './_internal.js';
/** Trả các thành phần wall-clock theo timezone, không thay đổi instant. */
export function convertTimeZone(input,timeZone) {
 const d=asDate(input), format=new Intl.DateTimeFormat('en-US',{timeZone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
 const p=Object.fromEntries(format.formatToParts(d).filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)]));
 const offsetMinutes=Math.round((Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second)-Math.floor(d.getTime()/1000)*1000)/60000);
 return {...p,timeZone,offsetMinutes};
}
