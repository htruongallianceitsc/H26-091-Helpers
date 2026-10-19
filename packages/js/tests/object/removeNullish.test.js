import { describe, expect, it } from 'vitest';
import { removeNullish } from '../../src/object/removeNullish.js';

describe('removeNullish', () => {
  it('bỏ null/undefined nhưng giữ false, 0 và chuỗi rỗng', () => {
    expect(removeNullish({a:null,b:undefined,c:0,d:false,e:''})).toEqual({c:0,d:false,e:''});
  });
});
