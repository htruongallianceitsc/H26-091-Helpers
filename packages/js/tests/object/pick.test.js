import { describe, expect, it } from 'vitest';
import { pick } from '../../src/object/pick.js';

describe('pick', () => {
  it('chỉ lấy key tồn tại', () => expect(pick({a:1,b:2,c:3}, ['a','c','x'])).toEqual({a:1,c:3}));
});
