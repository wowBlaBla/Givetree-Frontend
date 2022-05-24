export type AuthToken = {
  expiry: number;
  token: string;
};

interface Auth {
  authToken: AuthToken;
  version: number;
}

const VERSION = 1;

export const setAuthToken = (key: string, authToken: AuthToken): void => {
  localStorage.setItem(
    key,
    JSON.stringify({
      authToken,
      version: VERSION,
    })
  );
};

export const unsetToken = (key: string): void => localStorage.removeItem(key);

export const getAuthToken = (key: string): string | null => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  const { version, authToken } = JSON.parse(item) as Auth;

  if (version !== VERSION) {
    localStorage.removeItem(key);
    return null;
  }

  const now = new Date();
  const expiry = new Date(authToken.expiry);

  if (expiry.getTime() > now.getTime()) {
    unsetToken(key);
    return null;
  }

  return authToken.token;
};
