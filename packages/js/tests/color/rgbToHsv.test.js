import {describe,it,expect} from 'vitest';
import {rgbToHsv} from '../../src/color/rgbToHsv.js';
describe('rgbToHsv',()=>{it('đúng kết quả chuẩn',()=>expect(rgbToHsv(255,0,0)).toEqual({h:0,s:100,v:100}));});
