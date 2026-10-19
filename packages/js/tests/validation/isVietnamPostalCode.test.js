import { describe, it, expect } from 'vitest';
import { isVietnamPostalCode } from '../../src/validation/isVietnamPostalCode.js';
describe('isVietnamPostalCode', () => {
  it("70000", () => expect(isVietnamPostalCode("70000")).toBe(true));
  it("700000", () => expect(isVietnamPostalCode("700000")).toBe(false));
});
