const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;
  if (!value) {
    throw new Error(`Missing config value for ${key}`);
  }
  return value;
};

export const GQL_ENDPOINT = getEnv("GQL_ENDPOINT", "https://zeus.hasura.app/v1/graphql");
export const AUTH0_DOMAIN = getEnv("NEXT_PUBLIC_AUTH0_DOMAIN", "givetree.au.auth0.com");
export const AUTH0_CLIENT_ID = getEnv(
  "NEXT_PUBLIC_AUTH0_CLIENT_ID",
  "mI4GhmusrtZnLfECRIjkZ06jjr7fH9Hr"
);
export const GIVETREE_ADMIN_AUTH_KEY = "givetree-admin-auth";
