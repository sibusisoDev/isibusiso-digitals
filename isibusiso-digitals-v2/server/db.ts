import sql, {type config as SqlConfig } from "mssql";
import dotenv from "dotenv";

dotenv.config();

function requireEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

// mssql config (not tedious)
const dbConfig: SqlConfig = {
    user: requireEnv("DB_USER"),          // SQL login user (if using SQL auth)
    password: requireEnv("DB_PASS"),      // SQL login password
    server: requireEnv("DB_SERVER"),      // e.g. "SIBUSISO\\SQLEXPRESS"
    database: requireEnv("DB_NAME"),
    port: Number(requireEnv("DB_PORT")),
    options: {
        encrypt: false,                     // set true if TLS is enabled
        trustServerCertificate: true,
    },
    // Windows Authentication instead of SQL login:
    // authentication: {
    //   type: "ntlm",
    //   options: {
    //     domain: requireEnv("DB_DOMAIN"),
    //     userName: requireEnv("DB_USER"),
    //     password: requireEnv("DB_PASS"),
    //   },
    // },
};

let pool: sql.ConnectionPool;

export async function getDbPool(): Promise<sql.ConnectionPool> {
    if (!pool) {
        pool = await sql.connect(dbConfig);
        console.log("✅ Connected to SQL Server!");
    }
    return pool;
}
