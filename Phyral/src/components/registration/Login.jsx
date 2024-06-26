import "../../index.css";
import logo from "../../assets/imgs/logo.jpg";
import { Input } from "../registration/Input.jsx";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export function Login() {
  const { login, error, loading } = useAuth(); // Usa el hook useAuth para realizar el login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting login form with:', { email, password });
    login(email, password); // Llama a la función login del hook useAuth
  };

  return (
    <div className="bg-white flex max-lg:flex-col">
      <div className="bg-white items-center justify-center lg:w-[40%] w-full h-screen">
        <img className="m-[4rem_auto]" src={logo} alt="logo" />
        <h2 className="text-3xl font-main font-bold pb-7 text-center text-custom-dark">
          Login
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid align-center gap-4 w-[50%] m-auto max-lg:w-[80%]"
        >
          <label className="text-xs text-custom-dark font-medium opacity-80">
            Username
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="font-main font-semibold text-white bg-custom-blue px-10 py-4 w-fit rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.35)]"
            disabled={loading} // Deshabilita el botón mientras se está cargando
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <div className="grid gap-4 mt-16 justify-items-center">
          <a
            className="font-main underline font-semibold text-custom-dark opacity-50 hover:opacity-100 text-sm"
            href="{#}"
          >
            Forgot password?
          </a>

          <a
            className="font-main underline font-semibold text-custom-dark opacity-50 hover:opacity-100 text-sm"
            href="{#}"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
