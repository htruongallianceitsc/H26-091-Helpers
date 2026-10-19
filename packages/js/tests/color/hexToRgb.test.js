import {describe,it,expect} from 'vitest';
import {hexToRgb} from '../../src/color/hexToRgb.js';
describe('hexToRgb',()=>{it('xử lý các trường hợp chính',()=>{ expect(hexToRgb('#f08')).toEqual({r:255,g:0,b:136,a:1}); expect(hexToRgb('#11223380').a).toBeCloseTo(128/255); });});
