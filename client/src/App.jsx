// import { useState } from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UsersListView from "./UserListView";
import CreateNewUser from "./CreateNewUser";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<UsersListView />} />
        <Route path="/new" element={<CreateNewUser />} />
      </Routes>
    </main>
  );
}

export default App;
