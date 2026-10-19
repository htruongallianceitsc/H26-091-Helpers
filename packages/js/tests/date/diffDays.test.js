import {describe,it,expect} from 'vitest';
import {diffDays} from '../../src/date/diffDays.js';
describe('diffDays',()=>{it('calendar boundaries and validation',()=>{expect(diffDays('2024-03-01','2024-02-28')).toBe(2);expect(diffDays('2024-02-28','2024-03-01')).toBe(-2);});});
