import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./pages/Layout";
import { PostProvider } from "./context/postContext";
import PostEditor from "./pages/PostEditor";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Auth />}>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Route>

          <Route path="/create" element={<PostEditor />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
