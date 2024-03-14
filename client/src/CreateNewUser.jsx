// NewUser.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateNewUser = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/api/new", { name });

      // Redirect to the list view
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleCancel = () => {
    // Redirect to the list view
    navigate("/");
  };

  return (
    <div className="new-user-container">
      <h1>New User</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />
      <button onClick={handleSave} className="save-btn">
        Save
      </button>
      <button onClick={handleCancel} className="cancel-btn">
        Cancel
      </button>
    </div>
  );
};

export default CreateNewUser;
