import { describe, it, expect } from 'vitest';
import { formatOrdinal } from '../../src/format/formatOrdinal.js';
describe('formatOrdinal', () => { it('handles behavior and edge cases', () => { expect(formatOrdinal(1)).toBe('1st'); expect(formatOrdinal(12)).toBe('12th'); expect(formatOrdinal(23)).toBe('23rd'); }); });
