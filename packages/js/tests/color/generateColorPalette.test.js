import {describe,it,expect} from 'vitest';
import {generateColorPalette} from '../../src/color/generateColorPalette.js';
describe('generateColorPalette',()=>{it('xử lý các trường hợp chính',()=>{ expect(generateColorPalette('#336699',5)).toHaveLength(5);expect(()=>generateColorPalette('#336699',1)).toThrow(); });});
