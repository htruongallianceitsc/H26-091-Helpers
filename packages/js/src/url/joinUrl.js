/** Join URL path segments while preserving the scheme and query. */
export function joinUrl(base, ...parts) {
  const url = new URL(base);
  const path = [url.pathname.replace(/\/+$/, ''), ...parts.map(x => String(x).replace(/^\/+|\/+$/g, ''))].filter(Boolean).join('/');
  url.pathname = path.startsWith('/') ? path : '/' + path;
  return url.toString();
}
