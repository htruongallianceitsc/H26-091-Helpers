import { describe, expect, it } from 'vitest';
import { removeAccents } from '../../src/string/removeAccents.js';

describe('removeAccents', () => {
  it('bỏ dấu tiếng Việt nhưng giữ hoa/thường', () => {
    expect(removeAccents('Đà Nẵng, Việt Nam')).toBe('Da Nang, Viet Nam');
  });
  it('trả chuỗi rỗng với nullish', () => {
    expect(removeAccents(null)).toBe('');
  });
});
