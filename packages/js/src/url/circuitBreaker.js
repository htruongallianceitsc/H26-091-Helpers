/** Circuit breaker: closed -> open -> half-open; half-open cho phép một probe. */
export function circuitBreaker({ failureThreshold = 5, resetTimeoutMs = 30000, now = Date.now, shouldCount = () => true } = {}) {
  if (!Number.isInteger(failureThreshold) || failureThreshold < 1 || !Number.isFinite(resetTimeoutMs) || resetTimeoutMs < 0) throw new RangeError('invalid circuit settings');
  let failures = 0, openedAt = 0, state = 'closed', probing = false;
  const open = () => { state = 'open'; openedAt = now(); probing = false; };
  return {
    get state() { return state; },
    reset() { state = 'closed'; failures = 0; probing = false; },
    async execute(fn) {
      if (typeof fn !== 'function') throw new TypeError('fn must be a function');
      if (state === 'open' && now() - openedAt >= resetTimeoutMs) state = 'half-open';
      if (state === 'open' || (state === 'half-open' && probing)) {
        const err = new Error('Circuit breaker is open'); err.code = 'CIRCUIT_OPEN'; throw err;
      }
      const probe = state === 'half-open'; if (probe) probing = true;
      try {
        const result = await fn();
        failures = 0; state = 'closed'; return result;
      } catch (error) {
        if (shouldCount(error)) { failures++; if (probe || failures >= failureThreshold) open(); }
        else if (probe) { state = 'closed'; failures = 0; }
        throw error;
      } finally { if (probe) probing = false; }
    }
  };
}
