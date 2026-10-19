import { describe, it, expect } from 'vitest';
import { maskByPattern } from '../../src/regex/maskByPattern.js';
describe('maskByPattern', () => { it('handles behavior and edge cases', () => { expect(maskByPattern('0901234567',/^(\d{3})\d{4}(\d{3})$/)).toBe('090****567'); }); });
