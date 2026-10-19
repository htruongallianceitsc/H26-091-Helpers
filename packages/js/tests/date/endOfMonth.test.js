import {describe,it,expect} from 'vitest';
import {endOfMonth} from '../../src/date/endOfMonth.js';
describe('endOfMonth',()=>{it('calendar boundaries and validation',()=>{const d=endOfMonth('2024-02-10');expect(d.getDate()).toBe(29);expect(d.getHours()).toBe(23);});});
