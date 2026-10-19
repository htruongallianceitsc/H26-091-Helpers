import { describe,it,expect } from 'vitest';
import { startOfIsoWeek } from '../../src/date/startOfIsoWeek.js';
describe('startOfIsoWeek',()=>{it('đúng kết quả biên cơ bản',()=>expect(startOfIsoWeek('2026-10-21').getDay()).toEqual(1));});
