import assert from 'node:assert/strict';
import * as h from '../packages/js/src/index.js';
const checks = [
 ()=>assert.deepEqual(h.getIsoWeek('2021-01-01'),{year:2020,week:53}),
 ()=>assert.equal(h.startOfIsoWeek('2026-10-21').getDay(),1),
 ()=>assert.equal(h.getIsoWeeksInYear(2020),53),
 ()=>assert.equal(h.convertTimeZone('2026-01-01T00:00:00Z','Asia/Ho_Chi_Minh').hour,7),
 ()=>assert.equal(h.zonedDateTimeToUtc('2026-01-01T07:00','Asia/Ho_Chi_Minh').toISOString(),'2026-01-01T00:00:00.000Z'),
 ()=>assert.throws(()=>h.zonedDateTimeToUtc('2026-03-08T02:30','America/New_York'),RangeError),
 ()=>assert.throws(()=>h.zonedDateTimeToUtc('2026-11-01T01:30','America/New_York'),RangeError),
 ()=>assert.notEqual(h.zonedDateTimeToUtc('2026-11-01T01:30','America/New_York','earlier').getTime(),h.zonedDateTimeToUtc('2026-11-01T01:30','America/New_York','later').getTime()),
 ()=>assert.equal(h.isBusinessDay('2026-10-19'),true),
 ()=>assert.equal(h.isBusinessDay('2026-10-19',{holidays:['2026-10-19']}),false),
 ()=>assert.equal(h.addBusinessDays('2026-10-16',1).getDay(),1),
 ()=>assert.equal(h.countBusinessDays('2026-10-19','2026-10-26'),5),
 ()=>assert.equal(h.getVietnamHolidays(2026).length,4),
 ()=>assert.equal(h.isWithinWorkingHours('2026-10-19T03:00:00Z'),true),
 ()=>assert.equal(h.getWorkingMinutes('2026-10-19T02:00:00Z','2026-10-19T03:00:00Z'),60),
 ()=>assert.equal(h.overlapIntervals({start:'2026-01-01',end:'2026-01-04'},{start:'2026-01-03',end:'2026-01-06'}).start.getDate(),3),
];
checks.forEach(fn=>fn());
console.log(`Date v0.3 offline behavior pass: ${checks.length} cases`);
