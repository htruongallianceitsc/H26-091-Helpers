import { describe, it, expect } from 'vitest';
import { constantTimeEqual } from '../../src/security/constantTimeEqual.js';
describe('constantTimeEqual', () => { it('behavior', async () => { expect(constantTimeEqual(new Uint8Array([1]), new Uint8Array([2]))).toBe(false); }); });
