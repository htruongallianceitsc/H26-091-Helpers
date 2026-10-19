import {describe,it,expect} from 'vitest';
import {alphaBlend} from '../../src/color/alphaBlend.js';
describe('alphaBlend',()=>{it('đúng kết quả chuẩn',()=>expect(alphaBlend('#ff000080','#000')).toEqual('#800000'));});
