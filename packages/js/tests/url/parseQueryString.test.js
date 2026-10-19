import { describe, expect, it } from 'vitest';
import { parseQueryString } from '../../src/url/parseQueryString.js';

describe('parseQueryString', () => {
  it('parse query và repeated key', () => {
    expect(parseQueryString('?q=xin+ch%C3%A0o&tag=a&tag=b')).toEqual({ q: 'xin chào', tag: ['a','b'] });
  });
  it('query rỗng', () => expect(parseQueryString('')).toEqual({}));
});
