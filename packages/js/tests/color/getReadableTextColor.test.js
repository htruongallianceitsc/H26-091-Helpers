import {describe,it,expect} from 'vitest';
import {getReadableTextColor} from '../../src/color/getReadableTextColor.js';
describe('getReadableTextColor',()=>{it('xử lý các trường hợp chính',()=>{ expect(getReadableTextColor('#000')).toBe('#ffffff');expect(getReadableTextColor('#fff')).toBe('#000000'); });});
