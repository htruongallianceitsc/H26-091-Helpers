import {describe,it,expect} from 'vitest';
import {meetsWcagContrast} from '../../src/color/meetsWcagContrast.js';
describe('meetsWcagContrast',()=>{it('xử lý các trường hợp chính',()=>{ expect(meetsWcagContrast('#777','#fff')).toBe(false);expect(meetsWcagContrast('#000','#fff','AAA')).toBe(true); });});
