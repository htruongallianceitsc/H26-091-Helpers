import {describe,it,expect} from 'vitest';
import {formatInTimeZone} from '../../src/date/formatInTimeZone.js';
describe('formatInTimeZone',()=>{it('calendar boundaries and validation',()=>{const opt={year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hourCycle:'h23'};expect(formatInTimeZone('2026-10-19T00:00:00Z','Asia/Ho_Chi_Minh','en-GB',opt)).toContain('07');expect(()=>formatInTimeZone(new Date(),'Mars/Olympus')).toThrow();});});
