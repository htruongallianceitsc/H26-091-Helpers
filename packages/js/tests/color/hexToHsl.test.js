import {describe,it,expect} from 'vitest';
import {hexToHsl} from '../../src/color/hexToHsl.js';
describe('hexToHsl',()=>{it('xử lý các trường hợp chính',()=>{ expect(hexToHsl('#ff0000')).toEqual({h:0,s:100,l:50}); });});
