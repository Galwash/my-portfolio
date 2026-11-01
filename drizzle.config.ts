import { defineConfig } from "drizzle-kit";

// `drizzle-kit generate` only diffs the schema against local snapshots and needs
// no connection. Commands that talk to the database (migrate, push) still fail
// fast with a clear message when DATABASE_URL is missing.
const connectionString = process.env.DATABASE_URL;
const command = process.argv.find((arg) => ["migrate", "push", "pull", "studio", "introspect"].includes(arg));
if (!connectionString && command) {
  throw new Error(`DATABASE_URL is required to run drizzle-kit ${command}`);
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString ?? "",
  },
});
