import {describe,it,expect} from 'vitest';
import {analogousColors} from '../../src/color/analogousColors.js';
describe('analogousColors',()=>{it('đúng kết quả chuẩn',()=>expect(analogousColors('#f00',0)).toEqual(['#ff0000','#ff0000','#ff0000']));});
