import {describe,it,expect} from 'vitest';
import {darkenColor} from '../../src/color/darkenColor.js';
describe('darkenColor',()=>{it('xử lý các trường hợp chính',()=>{ expect(darkenColor('#fff',1)).toBe('#000000'); });});
