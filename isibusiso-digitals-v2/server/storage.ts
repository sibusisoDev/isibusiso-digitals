
import crypto from "crypto";
import sql from "mssql";
// @ts-ignore
import { getDbPool } from "./db.ts";

// -----------------------------
// Types
// -----------------------------

export interface ContactRequest {
    id: string;
    name: string;
    email: string;
    project?: string;
    message: string;
    createdAt: Date;
}

export interface InsertContactRequest {
    name: string;
    email: string;
    project?: string;
    message: string;
}

export interface IStorage {
    saveContact(data: InsertContactRequest): Promise<ContactRequest>;
}

// -----------------------------
// Memory Storage (Dev Mode)
// -----------------------------

export class MemStorage implements IStorage {
    private contacts = new Map<string, ContactRequest>();

    async saveContact(data: InsertContactRequest): Promise<ContactRequest> {
        const id = crypto.randomUUID();
        const record: ContactRequest = {
            id,
            createdAt: new Date(),
            ...data
        };

        this.contacts.set(id, record);
        return record;
    }
}

// -----------------------------
// SQL Storage (Production)
// -----------------------------

export class SqlStorage implements IStorage {
    private pool: sql.ConnectionPool;

    constructor(pool: sql.ConnectionPool) {
        this.pool = pool;
    }

    async saveContact(data: InsertContactRequest): Promise<ContactRequest> {
        const id = crypto.randomUUID();

        await this.pool.request()
            .input("id", sql.VarChar(36), id)
            .input("name", sql.NVarChar(sql.MAX), data.name)
            .input("email", sql.NVarChar(sql.MAX), data.email)
            .input("project", sql.NVarChar(sql.MAX), data.project ?? null)
            .input("message", sql.NVarChar(sql.MAX), data.message)
            .query(`
                INSERT INTO dbo.ContactRequests (id, name, email, project, message)
                VALUES (@id, @name, @email, @project, @message)
            `);

        return {
            id,
            createdAt: new Date(),
            ...data
        };
    }
}

// -----------------------------
// Storage Selector
// -----------------------------

export let storage: IStorage;

export async function initStorage() {
    if (process.env.NODE_ENV === "production") {
        const pool = await getDbPool();
        storage = new SqlStorage(pool);
    } else {
        storage = new MemStorage();
    }

    console.log(
        `Storage initialized using ${process.env.NODE_ENV === "production" ? "SQL Server" : "in-memory"}`
    );
}