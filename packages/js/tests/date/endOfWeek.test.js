import {describe,it,expect} from 'vitest';
import {endOfWeek} from '../../src/date/endOfWeek.js';
describe('endOfWeek',()=>{it('calendar boundaries and validation',()=>{expect(endOfWeek('2026-10-19').getDate()).toBe(25);expect(endOfWeek('2026-10-19').getHours()).toBe(23);});});
