/** A server-side MFA provider is deliberately not emulated in this static demo. */
export const AUTH_MODE = 'local-game-passcode';
export function requireMfaProvider() { throw new Error('MFA needs a real authentication backend. The hackathon demo uses an in-game passcode instead.'); }
