import {describe,it,expect} from 'vitest';
import {startOfWeek} from '../../src/date/startOfWeek.js';
describe('startOfWeek',()=>{it('calendar boundaries and validation',()=>{expect(startOfWeek('2026-10-18').getDate()).toBe(12);expect(startOfWeek('2026-10-18',0).getDate()).toBe(18);});});
