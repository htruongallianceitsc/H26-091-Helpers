import {describe,it,expect} from 'vitest';
import {complementaryColor} from '../../src/color/complementaryColor.js';
describe('complementaryColor',()=>{it('xử lý các trường hợp chính',()=>{ expect(complementaryColor('#ff0000')).toBe('#00ffff'); });});
