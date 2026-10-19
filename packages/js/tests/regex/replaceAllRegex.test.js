import { describe, it, expect } from 'vitest';
import { replaceAllRegex } from '../../src/regex/replaceAllRegex.js';
describe('replaceAllRegex', () => { it('handles behavior and edge cases', () => { expect(replaceAllRegex('a1b2',/\d/,'#')).toBe('a#b#'); }); });
