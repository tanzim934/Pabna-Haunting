import React, { createContext, useContext } from 'react';
import { useHaunting, getState } from './haunting';
/** Compatibility context for shared Base44 UI. This project has an in-game clearance gate only. */
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const state = useHaunting();
  const value = {
    isAuthenticated: state.clearance,
    isLoadingAuth: false,
    authChecked: true,
    authError: null,
    user: state.clearance ? { id: 'game-operator', name: state.operator } : null,
    checkUserAuth: async () => getState().clearance,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() { const ctx = useContext(AuthContext); if (!ctx) throw new Error('useAuth must be used inside AuthProvider'); return ctx; }
