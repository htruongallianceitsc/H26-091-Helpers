import { describe, expect, it } from 'vitest';
import { formatCurrency } from '../../src/number/formatCurrency.js';

describe('formatCurrency', () => {
  it('định dạng VND', () => {
    const result = formatCurrency(1234567).replace(/\u00a0/g, ' ');
    expect(result).toContain('1.234.567');
    expect(result).toMatch(/[₫đ]/i);
  });
  it('định dạng USD theo en-US', () => expect(formatCurrency(12.5, { currency: 'USD', locale: 'en-US' })).toBe('$12.50'));
  it('reject NaN', () => expect(() => formatCurrency(NaN)).toThrow(TypeError));
});
