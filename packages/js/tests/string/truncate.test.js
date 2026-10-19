import { describe, expect, it } from 'vitest';
import { truncate } from '../../src/string/truncate.js';

describe('truncate', () => {
  it('không cắt khi đủ ngắn', () => expect(truncate('hello', 5)).toBe('hello'));
  it('cắt và thêm hậu tố', () => expect(truncate('abcdefghij', 7)).toBe('abcd...'));
  it('xử lý giới hạn ngắn hơn hậu tố', () => expect(truncate('abcdef', 2)).toBe('..'));
  it('reject maxLength âm', () => expect(() => truncate('abc', -1)).toThrow(RangeError));
});
