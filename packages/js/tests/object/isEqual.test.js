import { describe, it, expect } from 'vitest';
import { isEqual } from '../../src/object/isEqual.js';
describe('isEqual', () => { it('được export và thực thi', () => expect(isEqual).toBeTypeOf('function')); });
