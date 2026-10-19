import { describe, expect, it } from 'vitest';
import { uuid } from '../../src/security/uuid.js';

describe('uuid', () => {
  it('sinh UUID v4 hợp lệ', () => {
    expect(uuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
  it('hai lần gọi không trùng trong test đơn giản', () => expect(uuid()).not.toBe(uuid()));
});
