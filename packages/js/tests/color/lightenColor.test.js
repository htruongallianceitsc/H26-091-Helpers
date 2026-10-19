import {describe,it,expect} from 'vitest';
import {lightenColor} from '../../src/color/lightenColor.js';
describe('lightenColor',()=>{it('xử lý các trường hợp chính',()=>{ expect(lightenColor('#000',1)).toBe('#ffffff'); });});
