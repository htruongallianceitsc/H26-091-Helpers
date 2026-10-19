import { httpClient } from './httpClient.js';
/** API client có token provider, request/response/error interceptors và HTTP core. */
export function createApiClient({ baseUrl = '', getToken, onRequest, onResponse, onError, ...options } = {}) {
  const requestCore = httpClient({ baseUrl, ...options });
  return {
    async request(path, requestOptions = {}) {
      try {
        const token = typeof getToken === 'function' ? await getToken() : undefined;
        const headers = new Headers(requestOptions.headers ?? {});
        if (token && !headers.has('Authorization')) headers.set('Authorization', `Bearer ${token}`);
        let context = { path, options: { ...requestOptions, headers: Object.fromEntries(headers.entries()) } };
        if (onRequest) context = await onRequest(context);
        if (!context || typeof context.path !== 'string' || !context.options) throw new TypeError('onRequest must return {path, options}');
        let result = await requestCore(context.path, context.options);
        if (onResponse) result = await onResponse(result, context);
        return result;
      } catch (error) {
        if (onError) await onError(error);
        throw error;
      }
    },
    get(path, options) { return this.request(path, { ...options, method: 'GET' }); },
    post(path, body, options) { return this.request(path, { ...options, method: 'POST', body }); },
    put(path, body, options) { return this.request(path, { ...options, method: 'PUT', body }); },
    delete(path, options) { return this.request(path, { ...options, method: 'DELETE' }); }
  };
}
