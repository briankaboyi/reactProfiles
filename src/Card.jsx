import React, { useEffect, useState } from "react";
import { getUserById } from "./services/users.api";
import { useParams } from "react-router-dom";

export default function Card() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  async function getData() {
    setLoading(true);
    const data = await getUserById(params.id);
    setUser(data.data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return "loading.........................";
  }

  return (
    <div className="card">
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
      <p>AGE: {user?.age}</p>
      <img src={user?.image} alt="" />
    </div>
  );
}
