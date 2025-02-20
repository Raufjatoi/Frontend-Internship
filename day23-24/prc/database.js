const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("data.db", (err) => {
    if (err) {
        console.error("Error openning database", err);
    } else {
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            user TEXT,
            email TEXT )`
        );
    }
});

module.exports = db;