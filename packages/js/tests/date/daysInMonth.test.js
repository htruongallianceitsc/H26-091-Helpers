import {describe,it,expect} from 'vitest';
import {daysInMonth} from '../../src/date/daysInMonth.js';
describe('daysInMonth',()=>{it('calendar boundaries and validation',()=>{expect(daysInMonth('2024-02-10')).toBe(29);expect(daysInMonth('2025-02-10')).toBe(28);});});
