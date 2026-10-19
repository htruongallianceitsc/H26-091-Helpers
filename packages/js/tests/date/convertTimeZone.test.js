import { describe,it,expect } from 'vitest';
import { convertTimeZone } from '../../src/date/convertTimeZone.js';
describe('convertTimeZone',()=>{it('đúng kết quả biên cơ bản',()=>expect(convertTimeZone('2026-01-01T00:00:00Z','Asia/Ho_Chi_Minh').hour).toEqual(7));});
