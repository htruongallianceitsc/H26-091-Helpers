import { describe, it, expect } from 'vitest';
import { isTime24h } from '../../src/validation/isTime24h.js';
describe('isTime24h', () => {
  it("23:59", () => expect(isTime24h("23:59")).toBe(true));
  it("00:00:00", () => expect(isTime24h("00:00:00")).toBe(true));
  it("24:00", () => expect(isTime24h("24:00")).toBe(false));
});
