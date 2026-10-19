import { describe, expect, it } from 'vitest';
import { formatDate } from '../../src/date/formatDate.js';

describe('formatDate', () => {
  it('format YYYY-MM-DD không lệch ngày', () => expect(formatDate('2026-10-19')).toBe('19/10/2026'));
  it('hỗ trợ pattern', () => expect(formatDate(new Date(2026, 9, 19, 8, 5, 3), 'YYYY-MM-DD HH:mm:ss')).toBe('2026-10-19 08:05:03'));
  it('reject ngày invalid', () => expect(() => formatDate('not-a-date')).toThrow(RangeError));
});
