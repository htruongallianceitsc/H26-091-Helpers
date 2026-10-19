import { describe, it, expect } from 'vitest';
import { isISODate } from '../../src/validation/isISODate.js';
describe('isISODate', () => {
  it("2024-02-29", () => expect(isISODate("2024-02-29")).toBe(true));
  it("2025-02-29", () => expect(isISODate("2025-02-29")).toBe(false));
});
