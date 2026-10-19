import {describe,it,expect} from 'vitest';
import {parseDate} from '../../src/date/parseDate.js';
describe('parseDate',()=>{it('calendar boundaries and validation',()=>{expect(parseDate('29/02/2024').getDate()).toBe(29);expect(()=>parseDate('29/02/2025')).toThrow();expect(()=>parseDate('31/04/2024')).toThrow();expect(parseDate('2024-02-29','YYYY-MM-DD').getMonth()).toBe(1);});});
