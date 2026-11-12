/** Base44 metadata only. The static Vercel demo does not depend on the Base44 service. */
export const appParams = {
  appId: import.meta.env.VITE_BASE44_APP_ID || '',
  token: '', // Never embed API tokens in a published client-side bundle.
  functionsVersion: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION || '',
  appBaseUrl: import.meta.env.VITE_BASE44_APP_BASE_URL || '',
};
