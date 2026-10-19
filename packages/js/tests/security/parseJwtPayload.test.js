import { describe, it, expect } from 'vitest';
import { parseJwtPayload } from '../../src/security/parseJwtPayload.js';
describe('parseJwtPayload', () => { it('behavior', async () => { expect(parseJwtPayload('e30.eyJzdWIiOiIxIn0.sig')).toEqual({sub:'1'}); }); });
