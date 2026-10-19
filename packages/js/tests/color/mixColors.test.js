import {describe,it,expect} from 'vitest';
import {mixColors} from '../../src/color/mixColors.js';
describe('mixColors',()=>{it('xử lý các trường hợp chính',()=>{ expect(mixColors('#000','#fff',0.5)).toBe('#808080'); });});
