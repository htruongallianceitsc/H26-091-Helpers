import { describe, it, expect } from 'vitest';
import { generateSecureToken } from '../../src/security/generateSecureToken.js';
describe('generateSecureToken', () => { it('behavior', async () => { expect(generateSecureToken(16)).toMatch(/^[a-f0-9]{32}$/); }); });
