import { describe, it, expect } from 'vitest';
import { getFirstMatch } from '../../src/regex/getFirstMatch.js';
describe('getFirstMatch', () => { it('handles behavior and edge cases', () => { expect(getFirstMatch('id=42',/(\d+)/).captures).toEqual(['42']); expect(getFirstMatch('abc',/\d/)).toBeNull(); }); });
