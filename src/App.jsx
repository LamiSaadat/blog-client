import "./App.css";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Nav />
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
