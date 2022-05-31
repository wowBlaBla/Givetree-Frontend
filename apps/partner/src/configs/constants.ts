const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;
  if (!value) {
    throw new Error(`Missing config value for ${key}`);
  }
  return value;
};

export const AUTH0_CLIENT_ID = getEnv("REACT_APP_AUTH0_CLIENT_ID");
export const AUTH0_DOMAIN = getEnv("REACT_APP_AUTH0_DOMAIN");
export const AUTH0_REDIRECT_URI = getEnv("REACT_APP_AUTH0_REDIRECT_URI");
export const CLOUDINARY_API_KEY = getEnv("REACT_APP_CLOUDINARY_PRESET");
export const CLOUDINARY_ENDPOINT = getEnv("REACT_APP_CLOUDINARY_ENDPOINT");
export const CLOUDINARY_PRESET = getEnv("REACT_APP_CLOUDINARY_PRESET");
export const HASURA_GRAPHQL_ADMIN_SECRET = getEnv(
  "REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET"
);
export const HASURA_GRAPHQL_ENDPOINT = getEnv("REACT_APP_HASURA_GRAPHQL_ENDPOINT");
