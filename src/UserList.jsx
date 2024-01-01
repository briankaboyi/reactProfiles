import React, { createContext, useEffect, useState } from "react";
import { getAllUsers } from "./services/users.api";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function UserList() {
  const [users, setUsers] = useState();
  async function getData() {
    const { data } = await getAllUsers();

    setUsers(data.users);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="users">
        {users &&
          users.map((user) => {
            return (
              <Link to={`/users/${user.id}`}>
                <div className="userCard" key={user.id}>
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
