import { useState } from "react";
import styles from "./App.module.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage } from "./pages";
import { MainControl } from "./pages/control/MainControl";

function App() {
  const isAuth = () => {
    const user = localStorage.getItem("user");
    return user !== null;
  };

  const ProtectedRoute = ({ children }) => {
    return isAuth() ? children : <Navigate to="/auth/login" />;
  };

  return (
    <Routes>
      <Route
        index
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      {/* Авторизация */}
      <Route path="/auth">
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      {/* Раздел контроля */}
      <Route
        path="/control"
        element={
          <ProtectedRoute>
            <MainControl />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
