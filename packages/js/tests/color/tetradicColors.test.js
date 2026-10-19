import {describe,it,expect} from 'vitest';
import {tetradicColors} from '../../src/color/tetradicColors.js';
describe('tetradicColors',()=>{it('đúng kết quả chuẩn',()=>expect(tetradicColors('#f00',60)).toEqual(['#ff0000','#ffff00','#00ffff','#0000ff']));});
