const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;
  if (!value) {
    throw new Error(`Missing config value for ${key}`);
  }
  return value;
};

export const AUTH0_DOMAIN = getEnv("AUTH0_DOMAIN", "givetree.au.auth0.com");
export const AUTH0_CLIENT_ID = getEnv(
  "AUTH0_CLIENT_ID",
  "mI4GhmusrtZnLfECRIjkZ06jjr7fH9Hr"
);
export const HASURA_GRAPHQL_ENDPOINT = getEnv(
  "HASURA_GRAPHQL_ENDPOINT",
  "https://givetree-zeus.hasura.app/v1/graphql"
);
export const HASURA_GRAPHQL_ADMIN_SECRET = getEnv(
  "HASURA_GRAPHQL_ADMIN_SECRET",
  "Fb0D5dZDlW9SSHqp0CuhOtGBZhXl0AFlzmEqmiOVcjgovyce4VXGgEGB19KuGiQI"
);
