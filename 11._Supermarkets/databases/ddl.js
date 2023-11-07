import db from "./connection.js";

const isDeleteMode = false;

if (isDeleteMode) {
    await db.exec("DROP TABLE IF EXISTS customers;");
    await db.exec("DROP TABLE IF EXISTS supermarkets;");
}

await db.exec(`CREATE TABLE IF NOT EXISTS supermarkets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT CHECK(name IN ('Netto', 'Rema 1000', 'Lidl') ) NOT NULL,
    location TEXT,
    is_best_in_denmark BOOLEAN DEFAULT FALSE
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    supermarket_id INTEGER,
    FOREIGN KEY (supermarket_id) REFERENCES supermarkets (id)
);`);

// SEED the database
if (isDeleteMode) {
    await db.run("INSERT INTO supermarkets (name) VALUES ('Netto');");
    await db.run("INSERT INTO supermarkets (name, is_best_in_denmark) VALUES ('Rema 1000', TRUE);");
    await db.run("INSERT INTO customers (name, supermarket_id) VALUES ('Daniel', 2);");    
}


