import {describe,it,expect} from 'vitest';
import {addYears} from '../../src/date/addYears.js';
describe('addYears',()=>{it('calendar boundaries and validation',()=>{expect(addYears('2024-02-29',1).getDate()).toBe(28);expect(addYears('2024-02-29',4).getDate()).toBe(29);});});
