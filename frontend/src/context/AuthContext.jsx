// Holds the logged-in user and token. login() is wired to POST /auth/login in US-02;
// logout() is FR-03 (the token is only deleted in the browser).
import { createContext, useContext, useMemo, useState } from 'react';
import { clearAuth, loadAuth, saveAuth } from './tokenStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => loadAuth()); // { token, user: { userId, fullName, role } }

  const value = useMemo(
    () => ({
      user: auth?.user || null,
      isLoggedIn: Boolean(auth?.token),
      setSession(next) {
        saveAuth(next);
        setAuth(next);
      },
      logout() {
        clearAuth();
        setAuth(null);
      },
    }),
    [auth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
