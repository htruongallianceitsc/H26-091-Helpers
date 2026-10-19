import { describe, it, expect } from 'vitest';
import { hashSha256 } from '../../src/security/hashSha256.js';
describe('hashSha256', () => { it('behavior', async () => { expect(await hashSha256('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'); }); });
