import { getIsoWeek } from './getIsoWeek.js';
/** ISO year luôn kết thúc trong tuần chứa 28/12. */
export function getIsoWeeksInYear(year) {if(!Number.isInteger(year)||year<1||year>9999) throw new RangeError('year không hợp lệ'); return getIsoWeek(new Date(year,11,28)).week;}
