import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgreSQLConnectionAdapter implements Connection {
    connection: any;

    constructor () {
        this.connection = pgp() ("postgres://postgres:postgres@localhost:5432/postgres");
    }

    query(stmt: string, params: any): Promise<any> {
        return this.connection.query(stmt, params);
    }

    async close(): Promise<void> {
        this.connection.$pool.end();
    }
}