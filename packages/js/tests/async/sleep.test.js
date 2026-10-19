import { describe, expect, it, vi } from 'vitest';
import { sleep } from '../../src/async/sleep.js';

describe('sleep', () => {
  it('resolve sau timeout', async () => {
    vi.useFakeTimers();
    const promise = sleep(100);
    await vi.advanceTimersByTimeAsync(100);
    await expect(promise).resolves.toBeUndefined();
    vi.useRealTimers();
  });
  it('reject khi abort', async () => {
    const controller = new AbortController();
    const promise = sleep(1000, controller.signal);
    controller.abort(new Error('stop'));
    await expect(promise).rejects.toThrow('stop');
  });
});
