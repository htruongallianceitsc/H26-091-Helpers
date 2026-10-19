import { describe,it,expect } from 'vitest';
import { overlapIntervals } from '../../src/date/overlapIntervals.js';
describe('overlapIntervals',()=>{it('đúng kết quả biên cơ bản',()=>expect(overlapIntervals({start:'2026-01-01',end:'2026-01-04'},{start:'2026-01-03',end:'2026-01-06'}).start.getDate()).toEqual(3));});
