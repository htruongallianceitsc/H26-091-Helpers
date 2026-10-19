import { describe, it, expect } from 'vitest';
import { formatPhoneVN } from '../../src/format/formatPhoneVN.js';
describe('formatPhoneVN', () => { it('handles behavior and edge cases', () => { expect(formatPhoneVN('0901234567')).toBe('0901 234 567'); expect(formatPhoneVN('+84901234567',{international:true})).toBe('+84 901 234 567'); expect(() => formatPhoneVN('123')).toThrow(); }); });
