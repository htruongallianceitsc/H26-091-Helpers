import { describe, it, expect } from 'vitest';
import { isMatch } from '../../src/regex/isMatch.js';
describe('isMatch', () => { it('handles behavior and edge cases', () => { expect(isMatch('AbC','^abc$','i')).toBe(true); const r=/a/g; expect(isMatch('a',r)).toBe(true); expect(isMatch('a',r)).toBe(true); }); });
