import { Connection } from "tedious";
import dotenv from "dotenv";

dotenv.config();

function requireEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

// -----------------------------
// Tedious NTLM Windows Auth Config
// -----------------------------
const dbConfig = {
    server: requireEnv("DB_SERVER"),
    options: {
        database: requireEnv("DB_NAME"),
        encrypt: false,
        trustServerCertificate: true,
        port: Number(requireEnv("DB_PORT")),
        rowCollectionOnRequestCompletion: true,
    },
    authentication: {
        type: "ntlm",
        options: {
            domain: requireEnv("DB_DOMAIN"),
            userName: requireEnv("DB_USER"),
            password: requireEnv("DB_PASS"),
        },
    },
};

let pool: Connection | null = null;

// -----------------------------
// Create (or reuse) a connection
// -----------------------------
export async function getDbPool(): Promise<Connection> {
    if (pool) return pool;

    // @ts-ignore
    pool = new Connection(dbConfig);

    await new Promise<void>((resolve, reject) => {
        pool!.on("connect", (err) => {
            if (err) {
                console.error("SQL Connection failed:", err.message);
                reject(err);
            } else {
                console.log("Connected to SQL Server");
                resolve();
            }
        });

        pool!.connect();
    });

    return pool!;
}
