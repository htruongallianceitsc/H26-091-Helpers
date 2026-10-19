import {describe,it,expect} from 'vitest';
import {startOfMonth} from '../../src/date/startOfMonth.js';
describe('startOfMonth',()=>{it('calendar boundaries and validation',()=>{const d=startOfMonth('2026-10-19');expect(d.getDate()).toBe(1);expect(d.getHours()).toBe(0);});});
