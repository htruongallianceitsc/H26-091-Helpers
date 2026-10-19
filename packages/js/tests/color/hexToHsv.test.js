import {describe,it,expect} from 'vitest';
import {hexToHsv} from '../../src/color/hexToHsv.js';
describe('hexToHsv',()=>{it('đúng kết quả chuẩn',()=>expect(hexToHsv('#0000ff')).toEqual({h:240,s:100,v:100}));});
