import { describe, it, expect } from 'vitest';
import { isUsername } from '../../src/validation/isUsername.js';
describe('isUsername', () => {
  it("dev_user01", () => expect(isUsername("dev_user01")).toBe(true));
  it("1user", () => expect(isUsername("1user")).toBe(false));
  it("ab", () => expect(isUsername("ab")).toBe(false));
});
