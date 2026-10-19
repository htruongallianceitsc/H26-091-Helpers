import { describe, it, expect } from 'vitest';
import { isHexColor } from '../../src/validation/isHexColor.js';
describe('isHexColor', () => {
  it("#fff", () => expect(isHexColor("#fff")).toBe(true));
  it("#11223344", () => expect(isHexColor("#11223344")).toBe(true));
  it("#12", () => expect(isHexColor("#12")).toBe(false));
});
