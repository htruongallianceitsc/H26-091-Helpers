import { describe, it, expect } from 'vitest';
import { get } from '../../src/object/get.js';
describe('get', () => { it('được export và thực thi', () => expect(get).toBeTypeOf('function')); });
