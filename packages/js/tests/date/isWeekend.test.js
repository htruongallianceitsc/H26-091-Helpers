import {describe,it,expect} from 'vitest';
import {isWeekend} from '../../src/date/isWeekend.js';
describe('isWeekend',()=>{it('calendar boundaries and validation',()=>{expect(isWeekend('2026-10-18')).toBe(true);expect(isWeekend('2026-10-19')).toBe(false);});});
