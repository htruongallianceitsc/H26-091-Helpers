import { describe, expect, it } from 'vitest';
import { deepMerge } from '../../src/object/deepMerge.js';

describe('deepMerge', () => {
  it('gộp nested object và thay array', () => {
    expect(deepMerge({a:{x:1}, list:[1,2]}, {a:{y:2}, list:[3]})).toEqual({a:{x:1,y:2},list:[3]});
  });
  it('chặn key có nguy cơ prototype pollution', () => {
    const payload = JSON.parse('{"__proto__": {"polluted": true}}');
    expect(() => deepMerge({}, payload)).toThrow('Key không an toàn');
  });
  it('không mutate input', () => {
    const a = { nested: { x: 1 } };
    const result = deepMerge(a, { nested: { y: 2 } });
    expect(a).toEqual({ nested: { x: 1 } });
    expect(result.nested).not.toBe(a.nested);
  });
});
