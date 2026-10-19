import { describe, expect, it } from 'vitest';
import { formatNumber } from '../../src/number/formatNumber.js';

describe('formatNumber', () => {
  it('phân cách hàng nghìn theo vi-VN', () => expect(formatNumber(1234567)).toBe('1.234.567'));
  it('hỗ trợ số thập phân', () => expect(formatNumber(12.3456, { locale: 'en-US', maximumFractionDigits: 2 })).toBe('12.35'));
});
