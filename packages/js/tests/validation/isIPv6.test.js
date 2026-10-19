import { describe, it, expect } from 'vitest';
import { isIPv6 } from '../../src/validation/isIPv6.js';
describe('isIPv6', () => {
  it("2001:db8::1", () => expect(isIPv6("2001:db8::1")).toBe(true));
  it("::1", () => expect(isIPv6("::1")).toBe(true));
  it("2001:::1", () => expect(isIPv6("2001:::1")).toBe(false));
});
