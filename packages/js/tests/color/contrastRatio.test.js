import {describe,it,expect} from 'vitest';
import {contrastRatio} from '../../src/color/contrastRatio.js';
describe('contrastRatio',()=>{it('xử lý các trường hợp chính',()=>{ expect(contrastRatio('#000','#fff')).toBeCloseTo(21);expect(contrastRatio('#fff','#fff')).toBeCloseTo(1); });});
