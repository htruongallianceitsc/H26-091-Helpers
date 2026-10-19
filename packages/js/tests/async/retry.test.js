import { describe, expect, it, vi } from 'vitest';
import { retry } from '../../src/async/retry.js';

describe('retry', () => {
  it('retry đến khi thành công', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new Error('1'))
      .mockRejectedValueOnce(new Error('2'))
      .mockResolvedValue('ok');
    await expect(retry(fn, { attempts: 3, delayMs: 0 })).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(3);
  });
  it('dừng khi shouldRetry false', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('fatal'));
    await expect(retry(fn, { attempts: 3, delayMs: 0, shouldRetry: () => false })).rejects.toThrow('fatal');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
