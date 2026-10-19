import {describe,it,expect} from 'vitest';
import {isValidColor} from '../../src/color/isValidColor.js';
describe('isValidColor',()=>{it('xử lý các trường hợp chính',()=>{ expect(isValidColor('#abcd')).toBe(true);expect(isValidColor('rgb(999,0,0)')).toBe(false);expect(isValidColor('red')).toBe(false); });});
