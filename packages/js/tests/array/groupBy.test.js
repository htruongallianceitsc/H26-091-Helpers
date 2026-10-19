import { describe, expect, it } from 'vitest';
import { groupBy } from '../../src/array/groupBy.js';

describe('groupBy', () => {
  it('nhóm phần tử theo key', () => {
    const result = groupBy([{t:'a',v:1},{t:'b',v:2},{t:'a',v:3}], x => x.t);
    expect(result.get('a')).toEqual([{t:'a',v:1},{t:'a',v:3}]);
    expect(result.get('b')).toEqual([{t:'b',v:2}]);
  });
});
