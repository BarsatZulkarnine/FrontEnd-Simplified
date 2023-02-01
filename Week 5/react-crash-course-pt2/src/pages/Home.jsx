import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/user";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  async function main() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }
  useEffect(() => {
    setTimeout(() => {
      main();
    }, 1500);
  }, []);

  function renderUser() {
    return(
      users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      ))
    )
  }

  return (
    <div>
      {users.lenght ? renderUser() : <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
