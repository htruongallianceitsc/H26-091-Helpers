import {describe,it,expect} from 'vitest';
import {isBetween} from '../../src/date/isBetween.js';
describe('isBetween',()=>{it('calendar boundaries and validation',()=>{expect(isBetween(new Date(2),new Date(1),new Date(3))).toBe(true);expect(isBetween(new Date(1),new Date(1),new Date(3),false)).toBe(false);expect(()=>isBetween(new Date(1),new Date(3),new Date(1))).toThrow();});});
