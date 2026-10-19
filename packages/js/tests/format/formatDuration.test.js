import { describe, it, expect } from 'vitest';
import { formatDuration } from '../../src/format/formatDuration.js';
describe('formatDuration', () => { it('handles behavior and edge cases', () => { expect(formatDuration(3661001)).toBe('01:01:01'); expect(formatDuration(3661001,{showMilliseconds:true})).toBe('01:01:01.001'); expect(() => formatDuration(-1)).toThrow(); }); });
