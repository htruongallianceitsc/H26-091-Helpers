import { describe, it, expect } from 'vitest';
import { isStrongPassword } from '../../src/validation/isStrongPassword.js';
describe('isStrongPassword', () => {
  it("Aa1234!x", () => expect(isStrongPassword("Aa1234!x")).toBe(true));
  it("password", () => expect(isStrongPassword("password")).toBe(false));
  it("Aa 1234!x", () => expect(isStrongPassword("Aa 1234!x")).toBe(false));
});
