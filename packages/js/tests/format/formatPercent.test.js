import { describe, it, expect } from 'vitest';
import { formatPercent } from '../../src/format/formatPercent.js';
describe('formatPercent', () => { it('handles behavior and edge cases', () => { expect(formatPercent(0.125, { locale: 'en-US', digits: 1 })).toBe('12.5%'); expect(formatPercent(25, {locale:'en-US',fromRatio:false})).toBe('25%'); expect(() => formatPercent(Infinity)).toThrow(); }); });
