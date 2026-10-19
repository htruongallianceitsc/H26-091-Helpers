import { describe,it,expect } from 'vitest';
import { getIsoWeek } from '../../src/date/getIsoWeek.js';
describe('getIsoWeek',()=>{it('đúng kết quả biên cơ bản',()=>expect(getIsoWeek('2021-01-01')).toEqual({year:2020,week:53}));});
