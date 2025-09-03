import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute, Protct } from "./components/ProtectedRoute";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Toaster />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <Protct>
              <Signup />
            </Protct>
          }
        />
        <Route
          path="/login"
          element={
            <Protct>
              <Login />
            </Protct>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Add the catch-all route at the end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
