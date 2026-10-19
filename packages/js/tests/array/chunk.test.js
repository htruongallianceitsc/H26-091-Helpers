import { describe, expect, it } from 'vitest';
import { chunk } from '../../src/array/chunk.js';

describe('chunk', () => {
  it('chia mảng đúng kích thước', () => expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]));
  it('mảng rỗng', () => expect(chunk([], 3)).toEqual([]));
  it('reject size = 0', () => expect(() => chunk([1], 0)).toThrow(RangeError));
});
