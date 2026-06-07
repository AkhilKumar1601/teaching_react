import { useEffect, useState } from "react";

function FetchUsersApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const json = await response.json();

      setUsers(json);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Fetch Users API</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchUsersApi;
