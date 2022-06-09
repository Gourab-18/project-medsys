import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/loginResgister/LoginRegister";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
