import {describe,it,expect} from 'vitest';
import {endOfDay} from '../../src/date/endOfDay.js';
describe('endOfDay',()=>{it('calendar boundaries and validation',()=>{const d=endOfDay('2024-06-01');expect(d.getHours()).toBe(23);expect(d.getMilliseconds()).toBe(999);});});
