import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 3000
})

// Use camel case in code but use snake case in db
export const db = drizzle(pool, {casing:'snake_case'})