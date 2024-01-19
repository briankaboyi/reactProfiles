import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Card from "./Card";
import UserList from "./UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="users" element={<UserList />} />
        <Route
          path="users/:id"
          element={<Card />}
      
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
