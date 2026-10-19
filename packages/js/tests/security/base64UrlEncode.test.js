import { describe, it, expect } from 'vitest';
import { base64UrlEncode } from '../../src/security/base64UrlEncode.js';
describe('base64UrlEncode', () => { it('behavior', async () => { expect(base64UrlEncode('Xin chào')).toBe('WGluIGNow6Bv'); }); });
