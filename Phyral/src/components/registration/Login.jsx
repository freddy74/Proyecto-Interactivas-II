import "../../index.css";
import logo from "../../assets/imgs/logo.jpg";
import { Input } from "../registration/Input.jsx";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import { NavLink } from "react-router-dom";

export function Login() {
  const { login, error, loading } = useAuth(); // Usa el hook useAuth para realizar el login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting login form with:", { email, password });
    login(email, password); // Llama a la función login del hook useAuth
  };

  return (
    <div className="bg-white flex max-lg:flex-col">
      <div className="bg-[url('./assets/imgs/signinbg.jpg')] bg-cover h-screen w-[60%] flex flex-col justify-center gap-6 max-lg:hidden">
        <section className="p-20">
          <h2 className="text-custom-dark font-secondary text-9xl hidden font-bold sm:block">
            Discover Phyral Universe
          </h2>
          <p className="text-base hidden sm:block font-semibold">
            Lorem ipsum dolor sit amet consectetur. Nibh volutpat elementum
            massa sollicitudin varius rhoncus sapien. Blandit ipsum eget tempor
            diam nunc tincidunt nunc et. At blandit condimentum at tortor orci
            vulputate tincidunt tellus eros. Et blandit adipiscing vitae enim
            eget. Et adipiscing non arcu non eget. Dui porta fermentum lacus.
          </p>
        </section>
      </div>
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
            Email
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

          <NavLink
            to={"/signin"}
            className="font-main underline font-semibold text-custom-dark opacity-50 hover:opacity-100 text-sm"
          >
            Create Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}
