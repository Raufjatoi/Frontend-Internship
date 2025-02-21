import { useState, useEffect } from "react";

export default function Home() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    // Fetch all items
    useEffect(() => {
        fetch("/api/items")
            .then((res) => res.json())
            .then(setItems);
    }, []);

    // Add new item
    const addItem = async () => {
        const res = await fetch("/api/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newItem }),
        });
        const data = await res.json();
        setItems([...items, data]);
        setNewItem("");
    };

    // Update item
    const updateItem = async (id) => {
        await fetch("/api/items", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name: editText }),
        });
        setItems(items.map((item) => (item.id === id ? { ...item, name: editText } : item)));
        setEditingId(null);
        setEditText("");
    };

    // Delete item
    const deleteItem = async (id) => {
        await fetch("/api/items", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Next.js CRUD App</h2>

            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item"
            />
            <button onClick={addItem}>Add</button>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {editingId === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => updateItem(item.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {item.name}
                                <button onClick={() => {
                                    setEditingId(item.id);
                                    setEditText(item.name);
                                }}>Edit</button>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
