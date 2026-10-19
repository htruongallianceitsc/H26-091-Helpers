import {describe,it,expect} from 'vitest';
import {rgbToOklch} from '../../src/color/rgbToOklch.js';
describe('rgbToOklch',()=>{it('đúng kết quả chuẩn',()=>expect(rgbToOklch(0,0,0)).toEqual({l:0,c:0,h:0}));});
