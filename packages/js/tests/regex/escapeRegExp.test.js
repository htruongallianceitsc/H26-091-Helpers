import { describe, it, expect } from 'vitest';
import { escapeRegExp } from '../../src/regex/escapeRegExp.js';
describe('escapeRegExp', () => { it('handles behavior and edge cases', () => { expect(new RegExp(escapeRegExp('a+b?')).test('a+b?')).toBe(true); expect(escapeRegExp('[x]')).toBe('\\[x\\]'); }); });
