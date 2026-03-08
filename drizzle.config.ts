import 'dotenv/config';

// export a plain object; drizzle-kit sometimes fails to read dialect through defineConfig
export default {
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
