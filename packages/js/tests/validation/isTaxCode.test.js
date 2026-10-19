import { describe, it, expect } from 'vitest';
import { isTaxCode } from '../../src/validation/isTaxCode.js';
describe('isTaxCode', () => {
  it("0000000001", () => expect(isTaxCode("0000000001")).toBe(false));
  it("abc", () => expect(isTaxCode("abc")).toBe(false));
});
