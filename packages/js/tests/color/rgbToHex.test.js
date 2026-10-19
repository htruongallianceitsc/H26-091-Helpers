import {describe,it,expect} from 'vitest';
import {rgbToHex} from '../../src/color/rgbToHex.js';
describe('rgbToHex',()=>{it('xử lý các trường hợp chính',()=>{ expect(rgbToHex(255,0,128)).toBe('#ff0080'); expect(rgbToHex(255,0,0,0.5)).toBe('#ff000080'); });});
