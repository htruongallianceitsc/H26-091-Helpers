import {describe,it,expect} from 'vitest';
import {hslToHex} from '../../src/color/hslToHex.js';
describe('hslToHex',()=>{it('xử lý các trường hợp chính',()=>{ expect(hslToHex(120,100,50)).toBe('#00ff00'); });});
