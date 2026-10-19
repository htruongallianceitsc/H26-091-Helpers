import { describe, expect, it } from 'vitest';
import { deepClone } from '../../src/object/deepClone.js';

describe('deepClone', () => {
  it('clone sâu mà không dùng chung reference', () => {
    const input = { a: { b: 1 }, list: [1, { c: 2 }] };
    const result = deepClone(input);
    result.a.b = 9;
    expect(input.a.b).toBe(1);
    expect(result).not.toBe(input);
  });
});
