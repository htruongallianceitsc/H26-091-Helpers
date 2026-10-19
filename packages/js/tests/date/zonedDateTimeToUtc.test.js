import { describe,it,expect } from 'vitest';
import { zonedDateTimeToUtc } from '../../src/date/zonedDateTimeToUtc.js';
describe('zonedDateTimeToUtc',()=>{it('đúng kết quả biên cơ bản',()=>expect(zonedDateTimeToUtc('2026-01-01T07:00','Asia/Ho_Chi_Minh').toISOString()).toEqual('2026-01-01T00:00:00.000Z'));});
