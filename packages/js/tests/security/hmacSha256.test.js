import { describe, it, expect } from 'vitest';
import { hmacSha256 } from '../../src/security/hmacSha256.js';
describe('hmacSha256', () => { it('behavior', async () => { expect(await hmacSha256('The quick brown fox jumps over the lazy dog', 'key')).toBe('f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8'); }); });
