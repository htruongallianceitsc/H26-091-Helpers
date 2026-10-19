import { describe,it,expect } from 'vitest';
import { isBusinessDay } from '../../src/date/isBusinessDay.js';
describe('isBusinessDay',()=>{it('đúng kết quả biên cơ bản',()=>expect(isBusinessDay('2026-10-19')).toEqual(true));});
