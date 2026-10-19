import {describe,it,expect} from 'vitest';
import {isSameDay} from '../../src/date/isSameDay.js';
describe('isSameDay',()=>{it('calendar boundaries and validation',()=>{expect(isSameDay('2024-06-01',new Date(2024,5,1,23))).toBe(true);expect(isSameDay('2024-06-01','2024-06-02')).toBe(false);});});
