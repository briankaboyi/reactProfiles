import React from "react";
import { Outlet } from "react-router-dom";
import UserList from "./UserList";

function HomeLayout() {
  return (
    <div className="home-layout">
      
      
        <UserList />
        {/* <Outlet /> */}
    
    </div>
  );
}

export default HomeLayout;
