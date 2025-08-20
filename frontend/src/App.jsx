import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute, Protct } from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className=" flex flex-col h-full ">
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
      </Routes>
    </div>
  );
};

export default App;
