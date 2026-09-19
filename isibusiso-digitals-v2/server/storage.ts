import crypto from "crypto";
import { Connection, Request, TYPES } from "tedious";
import { getDbPool } from "./db";
import type { ContactRequest, SavedContact } from "./schema";

// -----------------------------
// Memory Storage (Dev Mode)
// -----------------------------
class MemStorage {
    private contacts = new Map<string, SavedContact>();

    async saveContact(data: ContactRequest) : Promise<SavedContact> {
        const id = crypto.randomUUID();
        const record: SavedContact = { id, createdAt: new Date(), ...data };
        this.contacts.set(id, record);
        return record;
    }
}

// -----------------------------
// SQL Storage (Production)
// -----------------------------
class SqlStorage {
    private pool: Connection;

    constructor(pool: Connection) {
        this.pool = pool;
    }

    async saveContact(data: ContactRequest): Promise<SavedContact>{
        const id = crypto.randomUUID();

        return new Promise <SavedContact>((resolve, reject) => {
            const sql = `INSERT INTO dbo.ContactRequests (id, name, email, project, message)
                VALUES (@id, @name, @email, @project, @message)
            `;

            const request = new Request(sql, (err) => {
                if (err) {
                    console.error("SQL Insert Error:", err.message);
                    reject(err);
                    return;
                }
                resolve({
                    id,
                    createdAt: new Date(),
                    ...data,
                });
            });

            // Add parameters
            request.addParameter("id", TYPES.VarChar, id);
            request.addParameter("name", TYPES.NVarChar, data.name);
            request.addParameter("email", TYPES.NVarChar, data.email);
            request.addParameter("project", TYPES.NVarChar, data.project ?? null);
            request.addParameter("message", TYPES.NVarChar, data.message);

            this.pool.execSql(request);
        });
    }
}

// -----------------------------
// Storage Initializer
// -----------------------------
export let storage: MemStorage | SqlStorage;

export async function initStorage() {
    if (process.env.NODE_ENV === "production") {
        const pool = await getDbPool();
        storage = new SqlStorage(pool);
    } else {
        storage = new MemStorage();
    }
}
