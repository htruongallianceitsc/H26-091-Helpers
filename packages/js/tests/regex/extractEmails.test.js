import { describe, it, expect } from 'vitest';
import { extractEmails } from '../../src/regex/extractEmails.js';
describe('extractEmails', () => { it('handles behavior and edge cases', () => { expect(extractEmails('A@EXAMPLE.com a@example.com b@test.vn')).toEqual(['A@EXAMPLE.com','b@test.vn']); }); });
