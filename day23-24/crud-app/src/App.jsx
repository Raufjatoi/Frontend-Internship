import { useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => setUsers([...users, { id: Date.now(), ...user }]);
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "500px" }}>
        <UserForm onAddUser={addUser} />
        <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
      </div>
    </div>
  );
  
}