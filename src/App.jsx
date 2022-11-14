import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
