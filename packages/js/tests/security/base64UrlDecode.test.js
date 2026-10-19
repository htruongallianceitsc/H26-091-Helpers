import { describe, it, expect } from 'vitest';
import { base64UrlDecode } from '../../src/security/base64UrlDecode.js';
describe('base64UrlDecode', () => { it('behavior', async () => { expect(base64UrlDecode('WGluIGNow6Bv')).toBe('Xin chào'); }); });
