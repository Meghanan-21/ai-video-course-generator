import { drizzle } from 'drizzle-orm/neon-http';

// non-null assertion to satisfy TypeScript
export const db = drizzle(process.env.DATABASE_URL!);
