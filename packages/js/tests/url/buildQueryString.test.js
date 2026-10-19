import { describe, expect, it } from 'vitest';
import { buildQueryString } from '../../src/url/buildQueryString.js';

describe('buildQueryString', () => {
  it('encode unicode, space và array', () => {
    expect(buildQueryString({ q: 'xin chào', tag: ['a','b'], empty: null })).toBe('q=xin+ch%C3%A0o&tag=a&tag=b');
  });
  it('hỗ trợ prefix', () => expect(buildQueryString({a:1}, {prefix:true})).toBe('?a=1'));
});
