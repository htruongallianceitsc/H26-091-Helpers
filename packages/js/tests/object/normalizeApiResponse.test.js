import { describe, it, expect } from 'vitest';
import { normalizeApiResponse } from '../../src/object/normalizeApiResponse.js';
describe('normalizeApiResponse', () => { it('được export và thực thi', () => expect(normalizeApiResponse).toBeTypeOf('function')); });
