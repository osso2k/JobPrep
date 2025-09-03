import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        const decodedToken = jwt_decode.jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
        console.log(error.message);
      }
    };

    checkToken();

    window.addEventListener("tokenExpired", () => {
      navigate("/login", { replace: true });
    });

    return () => {
      window.removeEventListener("tokenExpired", () => {
        navigate("/login", { replace: true });
      });
    };
  }, [navigate]);

  return children;
};
export const Protct = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
