import {describe,it,expect} from 'vitest';
import {interpolateGradient} from '../../src/color/interpolateGradient.js';
describe('interpolateGradient',()=>{it('đúng kết quả chuẩn',()=>expect(interpolateGradient(['#000','#fff'],3)).toEqual(['#000000','#808080','#ffffff']));});
