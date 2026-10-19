import { describe,it,expect } from 'vitest';
import { addBusinessDays } from '../../src/date/addBusinessDays.js';
describe('addBusinessDays',()=>{it('đúng kết quả biên cơ bản',()=>expect(addBusinessDays('2026-10-16',1).getDay()).toEqual(1));});
