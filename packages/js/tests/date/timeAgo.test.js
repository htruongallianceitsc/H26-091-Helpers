import { describe, expect, it } from 'vitest';
import { timeAgo } from '../../src/date/timeAgo.js';

describe('timeAgo', () => {
  const now = new Date('2026-10-19T08:00:00Z');
  it('quá khứ', () => expect(timeAgo('2026-10-19T07:57:00Z', now)).toBe('3 phút trước'));
  it('tương lai', () => expect(timeAgo('2026-10-19T10:00:00Z', now)).toBe('sau 2 giờ'));
  it('vừa xong', () => expect(timeAgo('2026-10-19T07:59:55Z', now)).toBe('vừa xong'));
});
