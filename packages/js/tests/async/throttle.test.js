import { describe, expect, it, vi } from 'vitest';
import { throttle } from '../../src/async/throttle.js';

describe('throttle', () => {
  it('gọi leading và trailing đúng giới hạn', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled('a');
    throttled('b');
    throttled('c');
    expect(fn).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(100);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith('c');
    vi.useRealTimers();
  });
});
