import { describe, expect, it } from 'vitest';
import { uniqueBy } from '../../src/array/uniqueBy.js';

describe('uniqueBy', () => {
  it('giữ phần tử đầu tiên theo key', () => {
    const data = [{id:1,n:'a'},{id:1,n:'b'},{id:2,n:'c'}];
    expect(uniqueBy(data, x => x.id)).toEqual([{id:1,n:'a'},{id:2,n:'c'}]);
  });
});
