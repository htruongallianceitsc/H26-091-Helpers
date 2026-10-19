import { describe,it,expect } from 'vitest';
import { getVietnamHolidays } from '../../src/date/getVietnamHolidays.js';
describe('getVietnamHolidays',()=>{it('đúng kết quả biên cơ bản',()=>expect(getVietnamHolidays(2026).length).toEqual(4));});
