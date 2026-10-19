import {describe,it,expect} from 'vitest';
import {colorTemperatureToRgb} from '../../src/color/colorTemperatureToRgb.js';
describe('colorTemperatureToRgb',()=>{it('đúng kết quả chuẩn',()=>expect(colorTemperatureToRgb(1000)).toEqual({r:255,g:68,b:0}));});
