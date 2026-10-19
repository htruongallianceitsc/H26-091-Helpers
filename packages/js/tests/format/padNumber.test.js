import { describe, it, expect } from 'vitest';
import { padNumber } from '../../src/format/padNumber.js';
describe('padNumber', () => { it('handles behavior and edge cases', () => { expect(padNumber(7,3)).toBe('007'); expect(padNumber(-4,3)).toBe('-004'); expect(() => padNumber(1,0)).toThrow(); }); });
