import { describe, it, expect } from 'vitest';
import { isCCCD } from '../../src/validation/isCCCD.js';
describe('isCCCD', () => {
  it("079203001234", () => expect(isCCCD("079203001234")).toBe(true));
  it("12345678901", () => expect(isCCCD("12345678901")).toBe(false));
  it("07920300123a", () => expect(isCCCD("07920300123a")).toBe(false));
});
