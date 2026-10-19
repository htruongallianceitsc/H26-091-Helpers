import { describe, expect, it } from 'vitest';
import { slugify } from '../../src/string/slugify.js';

describe('slugify', () => {
  it('bỏ dấu tiếng Việt', () => {
    expect(slugify('Xin chào Việt Nam!')).toBe('xin-chao-viet-nam');
  });
  it('xử lý chữ đ', () => {
    expect(slugify('Đà Nẵng')).toBe('da-nang');
  });
  it('gộp nhiều khoảng trắng/dấu nối', () => {
    expect(slugify('  Xin   chào -- bạn  ')).toBe('xin-chao-ban');
  });
  it('hỗ trợ separator tùy chọn', () => {
    expect(slugify('Xin chào', '_')).toBe('xin_chao');
  });
  it('chuỗi rỗng', () => {
    expect(slugify('')).toBe('');
  });
});
