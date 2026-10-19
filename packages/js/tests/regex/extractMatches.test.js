import { describe, it, expect } from 'vitest';
import { extractMatches } from '../../src/regex/extractMatches.js';
describe('extractMatches', () => { it('handles behavior and edge cases', () => { expect(extractMatches('a1b2',/\d/).map(x=>x.match)).toEqual(['1','2']); expect(extractMatches('11',/1/,{limit:1})).toHaveLength(1); }); });
