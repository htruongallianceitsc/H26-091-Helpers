import {describe,it,expect} from 'vitest';
import {isLeapYear} from '../../src/date/isLeapYear.js';
describe('isLeapYear',()=>{it('calendar boundaries and validation',()=>{expect(isLeapYear(2000)).toBe(true);expect(isLeapYear(1900)).toBe(false);expect(isLeapYear(2024)).toBe(true);});});
