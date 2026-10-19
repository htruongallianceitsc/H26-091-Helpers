import {describe,it,expect} from 'vitest';
import {fromUnix} from '../../src/date/fromUnix.js';
describe('fromUnix',()=>{it('calendar boundaries and validation',()=>{expect(fromUnix(0).toISOString()).toBe('1970-01-01T00:00:00.000Z');expect(fromUnix(1000,'milliseconds').getTime()).toBe(1000);expect(()=>fromUnix(0,'hours')).toThrow();});});
