import { describe, it, expect } from 'vitest';
import { sanitizeFilename } from '../../src/security/sanitizeFilename.js';
describe('sanitizeFilename', () => { it('behavior', async () => { expect(sanitizeFilename('CON.txt')).toBe('_CON.txt'); }); });
