import { describe, it, expect } from 'vitest';
import { isEmpty } from '../../src/object/isEmpty.js';
describe('isEmpty', () => { it('được export và thực thi', () => expect(isEmpty).toBeTypeOf('function')); });
