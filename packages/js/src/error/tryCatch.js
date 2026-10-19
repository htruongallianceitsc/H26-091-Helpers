/** Return [error, result] for sync or async operations. */
export async function tryCatch(operation) {
  try { return [null, await (typeof operation === 'function' ? operation() : operation)]; }
  catch (error) { return [error, undefined]; }
}
