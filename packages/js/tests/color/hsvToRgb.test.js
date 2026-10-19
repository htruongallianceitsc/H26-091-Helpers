import {describe,it,expect} from 'vitest';
import {hsvToRgb} from '../../src/color/hsvToRgb.js';
describe('hsvToRgb',()=>{it('đúng kết quả chuẩn',()=>expect(hsvToRgb(120,100,100)).toEqual({r:0,g:255,b:0}));});
