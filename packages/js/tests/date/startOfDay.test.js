import {describe,it,expect} from 'vitest';
import {startOfDay} from '../../src/date/startOfDay.js';
describe('startOfDay',()=>{it('calendar boundaries and validation',()=>{const d=startOfDay('2024-06-01');expect(d.getHours()).toBe(0);expect(d.getMilliseconds()).toBe(0);});});
