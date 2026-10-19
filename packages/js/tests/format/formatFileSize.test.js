import { describe, it, expect } from 'vitest';
import { formatFileSize } from '../../src/format/formatFileSize.js';
describe('formatFileSize', () => { it('handles behavior and edge cases', () => { expect(formatFileSize(1048576)).toBe('1 MiB'); expect(formatFileSize(1000000,{base:1000})).toBe('1 MB'); expect(() => formatFileSize(-1)).toThrow(); }); });
