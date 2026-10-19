import { describe, it, expect } from 'vitest';
import { isIPv4 } from '../../src/validation/isIPv4.js';
describe('isIPv4', () => {
  it("192.168.1.1", () => expect(isIPv4("192.168.1.1")).toBe(true));
  it("256.1.1.1", () => expect(isIPv4("256.1.1.1")).toBe(false));
  it("01.2.3.4", () => expect(isIPv4("01.2.3.4")).toBe(false));
});
