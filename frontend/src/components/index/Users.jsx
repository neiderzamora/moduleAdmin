import React, { useState, useEffect } from 'react';
import API from '../Api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
