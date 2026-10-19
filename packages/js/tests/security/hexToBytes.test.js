import { describe, it, expect } from 'vitest';
import { hexToBytes } from '../../src/security/hexToBytes.js';
describe('hexToBytes', () => { it('behavior', async () => { expect([...hexToBytes('ff00')]).toEqual([255,0]); }); });
