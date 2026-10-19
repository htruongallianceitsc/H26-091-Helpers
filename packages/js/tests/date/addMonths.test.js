import {describe,it,expect} from 'vitest';
import {addMonths} from '../../src/date/addMonths.js';
describe('addMonths',()=>{it('calendar boundaries and validation',()=>{expect(addMonths('2025-01-31',1).getDate()).toBe(28);expect(addMonths('2024-01-31',1).getDate()).toBe(29);expect(()=>addMonths(new Date(),NaN)).toThrow();});});
