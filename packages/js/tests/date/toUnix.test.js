import {describe,it,expect} from 'vitest';
import {toUnix} from '../../src/date/toUnix.js';
describe('toUnix',()=>{it('calendar boundaries and validation',()=>{expect(toUnix(new Date(1500))).toBe(1);expect(toUnix(new Date(1500),'milliseconds')).toBe(1500);});});
