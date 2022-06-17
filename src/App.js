import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/loginResgister/LoginRegister";
import EditProfile from "./components/editProfile/EditProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import PendingWork from "./pages/PendingWork";
import CompletedWork from "./pages/CompletedWork";
import Quotation from "./pages/Quotation";
import Profile from "./pages/Profile";
import DocumentsCompany from "./pages/DocumentsCompany";
import DocumentsTrust from "./pages/DocumentsTrust";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/EditProfile" element={<EditProfile />} />
        <Route path="/pendingWork" element={<PendingWork />} />
        <Route path="/completedWork" element={<CompletedWork />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/documentsCompany" element={<DocumentsCompany />} />
        <Route path="/documentsTrust" element={<DocumentsTrust />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
