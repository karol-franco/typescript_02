
interface Database {
    connect(): void;
    disconnect(): void;
    find(table: string, id: number): any;
    update(table: string, id: number, data: any): void;
    delete(table: string, id: number): void;
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log("Conectado a la base de datos MySQL.");
    }

    disconnect(): void {
        console.log("Desconectado de la base de datos MySQL.");
    }

    find(table: string, id: number): any {
        console.log(`Buscando en la tabla '${table}' en MySQL el registro con ID ${id}.`);
        return { id, data: "Datos de ejemplo de MySQL" };
    }

    update(table: string, id: number, data: any): void {
        console.log(`Actualizando el registro con ID ${id} en la tabla '${table}' en MySQL con datos:`, data);
    }

    delete(table: string, id: number): void {
        console.log(`Eliminando el registro con ID ${id} en la tabla '${table}' en MySQL.`);
    }
}


class SQLiteDatabase implements Database {
    connect(): void {
        console.log("Conectado a la base de datos SQLite.");
    }

    disconnect(): void {
        console.log("Desconectado de la base de datos SQLite.");
    }

    find(table: string, id: number): any {
        console.log(`Buscando en la tabla '${table}' en SQLite el registro con ID ${id}.`);
        return { id, data: "Datos de ejemplo de SQLite" };
    }

    update(table: string, id: number, data: any): void {
        console.log(`Actualizando el registro con ID ${id} en la tabla '${table}' en SQLite con datos:`, data);
    }

    delete(table: string, id: number): void {
        console.log(`Eliminando el registro con ID ${id} en la tabla '${table}' en SQLite.`);
    }
}


const mysqlDB: Database = new MySQLDatabase();
mysqlDB.connect();
mysqlDB.find("usuarios", 1);
mysqlDB.update("usuarios", 1, { name: "John Doe" });
mysqlDB.delete("usuarios", 1);
mysqlDB.disconnect();

console.log("------");

const sqliteDB: Database = new SQLiteDatabase();
sqliteDB.connect();
sqliteDB.find("productos", 2);
sqliteDB.update("productos", 2, { name: "Laptop", price: 999.99 });
sqliteDB.delete("productos", 2);
sqliteDB.disconnect();
