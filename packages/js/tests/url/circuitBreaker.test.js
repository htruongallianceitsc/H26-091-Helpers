import { describe, it, expect } from 'vitest';
import { circuitBreaker } from '../../src/url/circuitBreaker.js';
describe('circuitBreaker', () => { it('handles key behavior and boundary cases', async () => { let t=0;const b=circuitBreaker({failureThreshold:1,resetTimeoutMs:10,now:()=>t});await expect(b.execute(()=>Promise.reject(new Error('x')))).rejects.toThrow('x');expect(b.state).toBe('open');await expect(b.execute(()=>1)).rejects.toMatchObject({code:'CIRCUIT_OPEN'});t=10;expect(await b.execute(()=>2)).toBe(2); }); });
