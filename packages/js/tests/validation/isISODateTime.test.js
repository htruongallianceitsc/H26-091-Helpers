import { describe, it, expect } from 'vitest';
import { isISODateTime } from '../../src/validation/isISODateTime.js';
describe('isISODateTime', () => {
  it("2025-01-30T10:20:30Z", () => expect(isISODateTime("2025-01-30T10:20:30Z")).toBe(true));
  it("2025-02-29T10:20:30Z", () => expect(isISODateTime("2025-02-29T10:20:30Z")).toBe(false));
  it("2025-01-01T25:00:00Z", () => expect(isISODateTime("2025-01-01T25:00:00Z")).toBe(false));
});
