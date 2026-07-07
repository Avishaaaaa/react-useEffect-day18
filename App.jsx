import { useEffect, useState } from "react";
import UserDirectory from "./components/UserDirectory";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Directory</h1>

      <input
        type="text"
        placeholder="Search by Name or Username..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Users: {filteredUsers.length}</h3>

      {loading ? (
        <h2>Loading users...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <UserDirectory users={filteredUsers} />
      )}
    </div>
  );
}

export default App;