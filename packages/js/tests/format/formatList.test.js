import { describe, it, expect } from 'vitest';
import { formatList } from '../../src/format/formatList.js';
describe('formatList', () => { it('handles behavior and edge cases', () => { expect(formatList(['a','b'],{locale:'en-US'})).toBe('a and b'); expect(() => formatList([1])).toThrow(); }); });
