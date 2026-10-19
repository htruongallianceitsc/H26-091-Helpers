import { describe, it, expect } from 'vitest';
import { isUUID } from '../../src/validation/isUUID.js';
describe('isUUID', () => {
  it("550e8400-e29b-41d4-a716-446655440000", () => expect(isUUID("550e8400-e29b-41d4-a716-446655440000")).toBe(true));
  it("invalid", () => expect(isUUID("invalid")).toBe(false));
});
