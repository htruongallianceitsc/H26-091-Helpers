import {describe,it,expect} from 'vitest';
import {getLuminance} from '../../src/color/getLuminance.js';
describe('getLuminance',()=>{it('xử lý các trường hợp chính',()=>{ expect(getLuminance('#000')).toBe(0);expect(getLuminance('#fff')).toBeCloseTo(1); });});
