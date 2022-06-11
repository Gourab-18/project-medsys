import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/loginResgister/LoginRegister";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}/>
        <Route path="/profile" element={<SideBar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
