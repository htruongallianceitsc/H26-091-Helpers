import { describe,it,expect } from 'vitest';
import { isWithinWorkingHours } from '../../src/date/isWithinWorkingHours.js';
describe('isWithinWorkingHours',()=>{it('đúng kết quả biên cơ bản',()=>expect(isWithinWorkingHours('2026-10-19T03:00:00Z')).toEqual(true));});
