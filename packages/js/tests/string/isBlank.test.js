import { describe, expect, it } from 'vitest';
import { isBlank } from '../../src/string/isBlank.js';

describe('isBlank', () => {
  it.each([null, undefined, '', '   ', '\n\t'])('blank: %j', (value) => expect(isBlank(value)).toBe(true));
  it.each(['a', 0, false, []])('not blank: %j', (value) => expect(isBlank(value)).toBe(false));
});
