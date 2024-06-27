import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://phyralbk.test/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error de inicio de sesión:", errorData);
        throw new Error(errorData.message || "Inicio de sesión fallido");
      }

      const data = await response.json();

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      const userId = data.user.id;
      console.log("ID de usuario:", userId);

      navigate(`/dashboard/${userId}`);
    } catch (err) {
      console.error("Error durante el inicio de sesión:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, lastname, email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://phyralbk.test/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422) {
          if (data.errors && data.errors.password) {
            throw new Error(data.errors.password[0]);
          } else {
            throw new Error("Error de validación");
          }
        } else {
          throw new Error("Error de red");
        }
      }

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      const userId = data.user.id;
      console.log("ID de usuario:", userId);

      navigate(`/login`);
    } catch (error) {
      console.error("Error en la función de registro:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return { login, logout, register, isAuthenticated, error, loading };
};
