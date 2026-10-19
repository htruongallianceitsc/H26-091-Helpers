import { describe, expect, it } from 'vitest';
import { isPhoneVN } from '../../src/validation/isPhoneVN.js';

describe('isPhoneVN', () => {
  it.each(['0901234567','+84901234567','090 123 4567'])('valid %s', value => expect(isPhoneVN(value)).toBe(true));
  it.each(['0123456789','84901234567','090123456','abc'])('invalid %s', value => expect(isPhoneVN(value)).toBe(false));
});
