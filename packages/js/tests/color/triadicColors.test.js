import {describe,it,expect} from 'vitest';
import {triadicColors} from '../../src/color/triadicColors.js';
describe('triadicColors',()=>{it('đúng kết quả chuẩn',()=>expect(triadicColors('#f00')).toEqual(['#ff0000','#00ff00','#0000ff']));});
