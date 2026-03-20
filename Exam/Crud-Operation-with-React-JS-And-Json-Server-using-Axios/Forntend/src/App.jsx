import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./components/adduser";
import EditUser from "./components/EditUser";

function App() {
  const [editUser, setEditUser] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const goHome = () => {
    setShowAdd(false);
    setEditUser(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar
        onAddUserClick={() => {
          setShowAdd(true);
          setEditUser(null);
        }}
        onHomeClick={goHome}
      />
      <div className="mt-4">
        {showAdd ? (
          <AddUser
            onAdd={() => {
              setShowAdd(false);
            }}
            onCancel={() => setShowAdd(false)}
          />
        ) : editUser ? (
          <EditUser
            user={editUser}
            onSave={() => {
              setEditUser(null);
            }}
            onCancel={() => setEditUser(null)}
          />
        ) : (
          <Home
            onEditClick={(user) => {
              setEditUser(user);
              setShowAdd(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
