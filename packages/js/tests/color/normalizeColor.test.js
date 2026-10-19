import {describe,it,expect} from 'vitest';
import {normalizeColor} from '../../src/color/normalizeColor.js';
describe('normalizeColor',()=>{it('xử lý các trường hợp chính',()=>{ expect(normalizeColor('rgb(255, 0, 0)')).toBe('#ff0000'); expect(normalizeColor('rgba(255,0,0,0.5)')).toBe('#ff000080'); });});
