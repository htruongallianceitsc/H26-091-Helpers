import { describe, it, expect } from 'vitest';
import { isRgbColor } from '../../src/validation/isRgbColor.js';
describe('isRgbColor', () => {
  it("rgb(255, 0, 128)", () => expect(isRgbColor("rgb(255, 0, 128)")).toBe(true));
  it("rgba(0,0,0,0.5)", () => expect(isRgbColor("rgba(0,0,0,0.5)")).toBe(true));
  it("rgb(256,0,0)", () => expect(isRgbColor("rgb(256,0,0)")).toBe(false));
});
