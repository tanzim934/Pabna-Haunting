import { requireMfaProvider } from './authMfa';
export const loadSignInOptions = async () => ({ name: 'The Pabna Haunting', mfa_required: false, demo: true });
export const mfaSession = () => ({ demo: true });
export function finishSignIn() { requireMfaProvider(); }
