// Keeps the login token for this browser tab only (cleared when the tab closes).
const KEY = 'ahli.auth';

export function saveAuth(auth) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(auth));
  } catch {
    /* storage unavailable: the user stays logged in until reload */
  }
}

export function loadAuth() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY)) || null;
  } catch {
    return null;
  }
}

export function clearAuth() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

export function getToken() {
  return loadAuth()?.token || null;
}
