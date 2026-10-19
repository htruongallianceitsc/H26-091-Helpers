import { describe, it, expect } from 'vitest';
import { isVietnamLicensePlate } from '../../src/validation/isVietnamLicensePlate.js';
describe('isVietnamLicensePlate', () => {
  it("59A-123.45", () => expect(isVietnamLicensePlate("59A-123.45")).toBe(true));
  it("30F-123.45", () => expect(isVietnamLicensePlate("30F-123.45")).toBe(true));
  it("invalid", () => expect(isVietnamLicensePlate("invalid")).toBe(false));
});
