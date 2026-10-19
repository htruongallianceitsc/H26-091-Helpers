import { describe, it, expect } from 'vitest';
import { formatCompactNumber } from '../../src/format/formatCompactNumber.js';
describe('formatCompactNumber', () => { it('handles behavior and edge cases', () => { expect(formatCompactNumber(1200,{locale:'en-US'})).toMatch(/1\.2K/i); expect(() => formatCompactNumber(NaN)).toThrow(); }); });
