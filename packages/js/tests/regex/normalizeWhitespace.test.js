import { describe, it, expect } from 'vitest';
import { normalizeWhitespace } from '../../src/regex/normalizeWhitespace.js';
describe('normalizeWhitespace', () => { it('handles behavior and edge cases', () => { expect(normalizeWhitespace(' a\t  b\n c ')).toBe('a b c'); expect(normalizeWhitespace(' a\n b ',{preserveNewlines:true})).toBe('a\nb'); }); });
