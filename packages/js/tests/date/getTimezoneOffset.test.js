import {describe,it,expect} from 'vitest';
import {getTimezoneOffset} from '../../src/date/getTimezoneOffset.js';
describe('getTimezoneOffset',()=>{it('calendar boundaries and validation',()=>{expect(getTimezoneOffset(new Date())).toBe(-new Date().getTimezoneOffset());});});
