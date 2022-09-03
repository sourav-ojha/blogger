import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { PostProvider } from "./context/postContext";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
