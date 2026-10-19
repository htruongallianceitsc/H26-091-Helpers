import { describe,it,expect } from 'vitest';
import { getIsoWeeksInYear } from '../../src/date/getIsoWeeksInYear.js';
describe('getIsoWeeksInYear',()=>{it('đúng kết quả biên cơ bản',()=>expect(getIsoWeeksInYear(2020)).toEqual(53));});
