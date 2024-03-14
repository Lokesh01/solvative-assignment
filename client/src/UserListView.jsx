import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersListView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend when component mounts
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        // console.log(response);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="users-list-container">
      <h1>Users List</h1>
      <button className="create-user-btn">
        <Link to="/new">Create New User</Link>
      </button>
      <table className="users-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>P5 Balance</th>
            <th>Reward Balance</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.p5Balance}</td>
                <td>{user.rewardBalance}</td>
                <td>
                  <Link to={`/${user._id}`} className="login-link">
                    Login
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersListView;
