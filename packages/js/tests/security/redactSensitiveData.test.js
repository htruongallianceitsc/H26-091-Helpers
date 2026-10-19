import { describe, it, expect } from 'vitest';
import { redactSensitiveData } from '../../src/security/redactSensitiveData.js';
describe('redactSensitiveData', () => { it('behavior', async () => { expect(redactSensitiveData({ password:'a' })).toEqual({password:'[REDACTED]'}); }); });
