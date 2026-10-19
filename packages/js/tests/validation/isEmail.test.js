import { describe, expect, it } from 'vitest';
import { isEmail } from '../../src/validation/isEmail.js';

describe('isEmail', () => {
  it.each(['a@b.com','user.name+tag@example.co.uk'])('valid %s', value => expect(isEmail(value)).toBe(true));
  it.each(['','abc','a@','@b.com','a@b','a b@c.com'])('invalid %s', value => expect(isEmail(value)).toBe(false));
});
