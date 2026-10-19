import { describe,it,expect } from 'vitest';
import { countBusinessDays } from '../../src/date/countBusinessDays.js';
describe('countBusinessDays',()=>{it('đúng kết quả biên cơ bản',()=>expect(countBusinessDays('2026-10-19','2026-10-26')).toEqual(5));});
