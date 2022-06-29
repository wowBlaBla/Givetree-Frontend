const getEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing config value for ${key}`);
  }

  return value;
};

export const SOLANA_NETWORK = getEnv("NEXT_PUBLIC_SOLANA_NETWORK");
