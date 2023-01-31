import { Link, useParams } from "react-router-dom"
import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [user, setUsers] = useState({});
    const {id} = useParams()

    async function main() {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUsers(data);
      }
      useEffect(() => {
        main()
      }, []);


    return (
        <div>
            <Link to="/">Go back</Link>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    )
}

export default Users