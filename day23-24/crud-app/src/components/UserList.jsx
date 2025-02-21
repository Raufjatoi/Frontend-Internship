import { useState } from "react";

export default function UserList({ users, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleUpdate = (id) => {
    onUpdate({ id, name: editedName, email: editedEmail });
    setEditingId(null);
  };

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {editingId === user.id ? (
                <div>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <input
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
              ) : (
                <div>
                  <strong>{user.name}</strong> - {user.email}
                </div>
              )}
              <div>
                {editingId === user.id ? (
                  <button
                    onClick={() => handleUpdate(user.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}