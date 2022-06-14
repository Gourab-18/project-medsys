import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/loginResgister/LoginRegister";
import EditProfile from "./components/editProfile/EditProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile/EditProfile" element={<EditProfile/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
