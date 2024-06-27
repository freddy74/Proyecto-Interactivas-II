import "../../index.css";
import logo from "../../assets/imgs/logo.jpg";
import { SimpleButton } from "../SimpleButton.jsx";
import { Input } from "../registration/Input.jsx";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { NavLink } from "react-router-dom";

export function SignIn() {
  const { register, error, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await register(name, lastname, email, password);
      // Manejar la respuesta exitosa si es necesario
    } catch (error) {
      console.error("Error en la función register:", error.message);
      // Manejar el error si es necesario
    }
  };

  return (
    <div className="bg-white flex flex-row-reverse max-lg:flex-col">
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
          Sign In
        </h2>

        <form
          className="grid align-center gap-4 w-[50%] m-auto max-lg:w-[80%]"
          onSubmit={handleSubmit}
        >
          <label className="text-xs text-custom-dark font-medium opacity-80">
            Name
          </label>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            Last Name
          </label>
          <Input
            name="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            Email
          </label>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            Password
          </label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="font-main font-semibold text-white bg-custom-blue px-10 py-4 w-fit rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.35)]"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <div className="grid gap-4 mt-16 justify-items-center">
          <NavLink
            to={"/login"}
            className="font-main underline font-semibold text-custom-dark opacity-50 hover:opacity-100 text-sm"
          >
            Already registered
          </NavLink>
        </div>
      </div>
    </div>
  );
}
