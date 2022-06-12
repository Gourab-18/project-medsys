import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/loginResgister/LoginRegister";
import SideBar from "./components/Sidebar/SideBar";
import EditProfile from "./components/editProfile/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}/>
        <Route path="/profile" element={<SideBar />}/>
        <Route path="/profile/EditProfile" element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
