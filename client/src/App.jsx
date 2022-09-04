import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BarLoading from "./components/Loading/BarLoading";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/postContext";

// import Layout from "./pages/Layout";
// import Auth from "./pages/Auth";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import PostEditor from "./pages/PostEditor";
// import Home from "./pages/Layout/Home";
// import PostViewer from "./pages/Layout/PostViewer";
// import MyPosts from "./pages/Layout/MyPosts";

// code spliting - dynamic import
// lazy import
const Layout = React.lazy(() => import("./pages/Layout"));
const Auth = React.lazy(() => import("./pages/Auth"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const PostEditor = React.lazy(() => import("./pages/PostEditor"));
const Home = React.lazy(() => import("./pages/Layout/Home"));
const PostViewer = React.lazy(() => import("./pages/Layout/PostViewer"));
const MyPosts = React.lazy(() => import("./pages/Layout/MyPosts"));

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <BarLoading />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Auth />}>
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Route>

            <Route path="/blog/create" element={<PostEditor />} />
            <Route path="blog/:id/edit" element={<PostEditor />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="myposts" element={<MyPosts />} />
              <Route path="blog/:id/:name" element={<PostViewer />} />
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </React.Suspense>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
