import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    if(loading) return <div className="loading">Verifying session...</div>;

     if (!isAuthenticated) {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        return null;
     }
      return children;
};

export default ProtectedRoute;