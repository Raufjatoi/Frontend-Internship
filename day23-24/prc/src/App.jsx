import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import About from "./components/about";    
import Contact from "./components/contact"; 
import Home from "./components/home";

import './index.css'

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => setUsers([...users, { id: Date.now(), ...user }]);
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ maxWidth: "500px", margin: "20px auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>      
                <p>CRUD App</p>
                <UserForm onAddUser={addUser} />
                <div style={{ height: "10px" }}></div>
                <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
