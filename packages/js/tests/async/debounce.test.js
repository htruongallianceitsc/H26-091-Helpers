import { describe, expect, it, vi } from 'vitest';
import { debounce } from '../../src/async/debounce.js';

describe('debounce', () => {
  it('chỉ gọi lần cuối sau wait', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced('a');
    debounced('b');
    await vi.advanceTimersByTimeAsync(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('b');
    vi.useRealTimers();
  });
  it('cancel', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced();
    debounced.cancel();
    await vi.advanceTimersByTimeAsync(100);
    expect(fn).not.toHaveBeenCalled();
    vi.useRealTimers();
  });
});
