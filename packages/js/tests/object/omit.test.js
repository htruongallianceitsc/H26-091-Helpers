import { describe, expect, it } from 'vitest';
import { omit } from '../../src/object/omit.js';

describe('omit', () => {
  it('bỏ key yêu cầu', () => expect(omit({a:1,b:2,c:3}, ['b'])).toEqual({a:1,c:3}));
});
