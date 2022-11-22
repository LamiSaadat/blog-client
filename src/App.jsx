import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";

import NavBar from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Account from "./components/Account/Account";
import ProtectedRoute from "./routing/ProtectedRoute";
import BlogPostPage from "./pages/BlogPostPage";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <NavBar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/blogPost" element={<BlogPostPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </main>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
