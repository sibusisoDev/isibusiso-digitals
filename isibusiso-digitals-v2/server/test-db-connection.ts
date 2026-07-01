import { Connection, type ConnectionConfiguration, Request } from "tedious";
import dotenv from "dotenv";

dotenv.config();

function requireEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

const config : ConnectionConfiguration = {
    server: requireEnv("DB_SERVER"), // e.g. "SIBUSISO\\SQLEXPRESS"
    options: {
        database: requireEnv("DB_NAME"),
        encrypt: false,
        trustServerCertificate: true,
        port: Number(requireEnv("DB_PORT")),
    },
    authentication: {
        type: "ntlm", // explicitly typed
        options: {
            domain: requireEnv("DB_DOMAIN"),
            userName: requireEnv("DB_USER"),
            password: requireEnv("DB_PASS"),
        },
    },
};

const connection = new Connection(config);

connection.on("connect", (err) => {
    if (err) {
        console.error("❌ Connection failed:", err.message);
    } else {
        console.log("✅ Connected to SQL Server!");

        // Run a simple query to confirm access
        const request = new Request("SELECT 1 AS number", (err, rowCount) => {
            if (err) {
                console.error("❌ Query failed:", err.message);
            } else {
                console.log(`✅ Query executed successfully, rowCount = ${rowCount}`);
            }
            connection.close();
        });

        request.on("row", (columns) => {
            console.log("Result:", columns[0].value);
        });

        connection.execSql(request);
    }
});

connection.connect();