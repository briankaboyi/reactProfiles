import React, { createContext, useEffect, useState } from "react";
import { getAllUsers } from "./services/users.api";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);

    const { data } = await getAllUsers();

    setUsers(data.users);
  }

  useEffect(() => {
    console.log("loading");

    getData();
    setLoading(false);
  }, []);

  if (loading) {
    return <p>loading.........</p>;
  }

  return (
    <div>
      <div className="users">
        {users.map((user) => {
          return (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div className="userCard">
                <h3 className="title">{user.firstName}</h3>
                <img src={user.image} alt="" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
