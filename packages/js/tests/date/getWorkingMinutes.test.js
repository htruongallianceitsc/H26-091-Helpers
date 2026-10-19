import { describe,it,expect } from 'vitest';
import { getWorkingMinutes } from '../../src/date/getWorkingMinutes.js';
describe('getWorkingMinutes',()=>{it('đúng kết quả biên cơ bản',()=>expect(getWorkingMinutes('2026-10-19T02:00:00Z','2026-10-19T03:00:00Z')).toEqual(60));});
