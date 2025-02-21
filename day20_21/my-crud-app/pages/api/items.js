import { openDb } from "../../lib/db";

export default async function handler(req, res) {
    const db = await openDb();

    switch (req.method) {
        case "GET": {
            const items = await db.all("SELECT * FROM items");
            res.json(items);
            break;
        }
        case "POST": {
            const { name } = req.body;
            const result = await db.run("INSERT INTO items (name) VALUES (?)", [name]);
            res.json({ id: result.lastID, name });
            break;
        }
        case "PUT": {
            const { id, name } = req.body;
            await db.run("UPDATE items SET name = ? WHERE id = ?", [name, id]);
            res.json({ updated: true });
            break;
        }
        case "DELETE": {
            const { id } = req.body;
            await db.run("DELETE FROM items WHERE id = ?", [id]);
            res.json({ deleted: true });
            break;
        }
        default:
            res.status(405).end(); // Method Not Allowed
    }
}
