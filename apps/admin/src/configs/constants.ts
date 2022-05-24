const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;
  if (!value) {
    throw new Error(`Missing config value for ${key}`);
  }
  return value;
};

export const GQL_ENDPOINT = getEnv("GQL_ENDPOINT", "https://zeus.hasura.app/v1/graphql");
export const GIVETREE_ADMIN_AUTH_KEY = "givetree-admin-auth";
