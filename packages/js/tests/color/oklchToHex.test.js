import {describe,it,expect} from 'vitest';
import {oklchToHex} from '../../src/color/oklchToHex.js';
describe('oklchToHex',()=>{it('đúng kết quả chuẩn',()=>expect(oklchToHex(0,0,0)).toEqual('#000000'));});
