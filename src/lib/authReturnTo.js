export function safeReturnTo(value) {
  const raw = value ?? (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('returnTo') : null);
  return typeof raw === 'string' && raw.startsWith('/') && !raw.startsWith('//') && !raw.includes('\\') ? raw : '/';
}
