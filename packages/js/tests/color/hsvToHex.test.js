import {describe,it,expect} from 'vitest';
import {hsvToHex} from '../../src/color/hsvToHex.js';
describe('hsvToHex',()=>{it('đúng kết quả chuẩn',()=>expect(hsvToHex(0,100,100)).toEqual('#ff0000'));});
