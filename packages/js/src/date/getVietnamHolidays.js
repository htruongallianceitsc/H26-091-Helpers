/** Chỉ ngày lễ dương lịch cố định theo Bộ luật Lao động; không đoán lịch âm, lịch nghỉ bù và lịch điều chỉnh chính thức. */
export function getVietnamHolidays(year,{extraDates=[]}={}) {
 if(!Number.isInteger(year)||year<100||year>9999) throw new RangeError('year không hợp lệ');
 const dates=[`${year}-01-01`,`${year}-04-30`,`${year}-05-01`,`${year}-09-02`,...extraDates];
 if(extraDates.some(x=>typeof x!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(x)))throw new RangeError('extraDates phải là YYYY-MM-DD');
 return [...new Set(dates)].sort();
}
