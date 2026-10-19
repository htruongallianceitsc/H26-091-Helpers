import { describe, it, expect } from 'vitest';
import { bytesToHex } from '../../src/security/bytesToHex.js';
describe('bytesToHex', () => { it('behavior', async () => { expect(bytesToHex(new Uint8Array([255,0]))).toBe('ff00'); }); });
