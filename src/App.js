import React from "react";
import AddUser from "./components/Users/AddingUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
