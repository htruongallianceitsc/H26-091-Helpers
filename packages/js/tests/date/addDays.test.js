import {describe,it,expect} from 'vitest';
import {addDays} from '../../src/date/addDays.js';
describe('addDays',()=>{it('calendar boundaries and validation',()=>{expect(addDays('2024-02-28',1).getDate()).toBe(29); expect(addDays('2024-03-01',-1).getDate()).toBe(29); expect(()=>addDays(new Date(),1.5)).toThrow(RangeError);});});
