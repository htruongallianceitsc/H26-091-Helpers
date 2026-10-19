import {describe,it,expect} from 'vitest';
import {oklchToRgb} from '../../src/color/oklchToRgb.js';
describe('oklchToRgb',()=>{it('đúng kết quả chuẩn',()=>expect(oklchToRgb(0,0,0)).toEqual({r:0,g:0,b:0}));});
