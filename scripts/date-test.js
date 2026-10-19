import assert from 'node:assert/strict';
import * as h from '../packages/js/src/index.js';
function expect(actual) { return {
 toBe(expected){assert.equal(actual,expected)},
 toContain(value){assert.ok(actual.includes(value))},
 toThrow(type){assert.throws(actual,type)},
 }; }
{const addDays=h.addDays; expect(addDays('2024-02-28',1).getDate()).toBe(29); expect(addDays('2024-03-01',-1).getDate()).toBe(29); expect(()=>addDays(new Date(),1.5)).toThrow(RangeError);}
{const diffDays=h.diffDays; expect(diffDays('2024-03-01','2024-02-28')).toBe(2);expect(diffDays('2024-02-28','2024-03-01')).toBe(-2);}
{const startOfDay=h.startOfDay; const d=startOfDay('2024-06-01');expect(d.getHours()).toBe(0);expect(d.getMilliseconds()).toBe(0);}
{const endOfDay=h.endOfDay; const d=endOfDay('2024-06-01');expect(d.getHours()).toBe(23);expect(d.getMilliseconds()).toBe(999);}
{const isSameDay=h.isSameDay; expect(isSameDay('2024-06-01',new Date(2024,5,1,23))).toBe(true);expect(isSameDay('2024-06-01','2024-06-02')).toBe(false);}
{const isWeekend=h.isWeekend; expect(isWeekend('2026-10-18')).toBe(true);expect(isWeekend('2026-10-19')).toBe(false);}
{const fromUnix=h.fromUnix; expect(fromUnix(0).toISOString()).toBe('1970-01-01T00:00:00.000Z');expect(fromUnix(1000,'milliseconds').getTime()).toBe(1000);expect(()=>fromUnix(0,'hours')).toThrow();}
{const toUnix=h.toUnix; expect(toUnix(new Date(1500))).toBe(1);expect(toUnix(new Date(1500),'milliseconds')).toBe(1500);}
{const addMonths=h.addMonths; expect(addMonths('2025-01-31',1).getDate()).toBe(28);expect(addMonths('2024-01-31',1).getDate()).toBe(29);expect(()=>addMonths(new Date(),NaN)).toThrow();}
{const addYears=h.addYears; expect(addYears('2024-02-29',1).getDate()).toBe(28);expect(addYears('2024-02-29',4).getDate()).toBe(29);}
{const startOfMonth=h.startOfMonth; const d=startOfMonth('2026-10-19');expect(d.getDate()).toBe(1);expect(d.getHours()).toBe(0);}
{const endOfMonth=h.endOfMonth; const d=endOfMonth('2024-02-10');expect(d.getDate()).toBe(29);expect(d.getHours()).toBe(23);}
{const daysInMonth=h.daysInMonth; expect(daysInMonth('2024-02-10')).toBe(29);expect(daysInMonth('2025-02-10')).toBe(28);}
{const isLeapYear=h.isLeapYear; expect(isLeapYear(2000)).toBe(true);expect(isLeapYear(1900)).toBe(false);expect(isLeapYear(2024)).toBe(true);}
{const parseDate=h.parseDate; expect(parseDate('29/02/2024').getDate()).toBe(29);expect(()=>parseDate('29/02/2025')).toThrow();expect(()=>parseDate('31/04/2024')).toThrow();expect(parseDate('2024-02-29','YYYY-MM-DD').getMonth()).toBe(1);}
{const isBetween=h.isBetween; expect(isBetween(new Date(2),new Date(1),new Date(3))).toBe(true);expect(isBetween(new Date(1),new Date(1),new Date(3),false)).toBe(false);expect(()=>isBetween(new Date(1),new Date(3),new Date(1))).toThrow();}
{const getTimezoneOffset=h.getTimezoneOffset; expect(getTimezoneOffset(new Date())).toBe(-new Date().getTimezoneOffset());}
{const formatInTimeZone=h.formatInTimeZone; const opt={year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hourCycle:'h23'};expect(formatInTimeZone('2026-10-19T00:00:00Z','Asia/Ho_Chi_Minh','en-GB',opt)).toContain('07');expect(()=>formatInTimeZone(new Date(),'Mars/Olympus')).toThrow();}
{const startOfWeek=h.startOfWeek; expect(startOfWeek('2026-10-18').getDate()).toBe(12);expect(startOfWeek('2026-10-18',0).getDate()).toBe(18);}
{const endOfWeek=h.endOfWeek; expect(endOfWeek('2026-10-19').getDate()).toBe(25);expect(endOfWeek('2026-10-19').getHours()).toBe(23);}
console.log('Date helper behavior pass: 20 functions');
