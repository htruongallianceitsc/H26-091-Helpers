import { describe, it, expect } from 'vitest';
import { validatePattern } from '../../src/regex/validatePattern.js';
describe('validatePattern', () => { it('handles behavior and edge cases', () => { expect(validatePattern('[a-z]+').valid).toBe(true); expect(validatePattern('[').valid).toBe(false); }); });
