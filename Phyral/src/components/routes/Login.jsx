import "../../index.css";
// import backgroundImage from "../assets/imgs/signinbg.jpg";
import logo from "../../assets/imgs/logo.jpg";
import { SimpleButton } from "../SimpleButton.jsx";
import React from "react";

export function LogIn() {
  return (
    <div className="bg-white min-h-screen flex w-screen">
          <div>
        <div className="bg-[url('./assets/imgs/signinbg.jpg')]  bg-cover h-screen grid lg:p-12">
          <h2 className="text-custom-dark text-9xl hidden font-extrabold sm:block mx-10 my-10">Discover Phyral universe</h2>
          <p className="text-base hidden sm:block font-extrabold mx-10 -my-20">Lorem ipsum dolor sit amet consectetur. Nibh volutpat elementum massa
            sollicitudin varius rhoncus sapien. Blandit ipsum eget tempor diam nunc tincidunt nunc
            et. At blandit condimentum at tortor orci vulputate tincidunt tellus eros. Et blandit adipiscing vitae enim eget. Et adipiscing non arcu non
            eget. Dui porta fermentum lacus.
          </p>
        </div>
      </div>
      <div className=" bg-white  items-center justify-center w-full max-w-screen-md max-h-screen-md mx-6 " >
        <img className="m-auto pb-14 pt-16 " src={logo} alt="logo" />
        <div className="mx-12 my-0">
          <h2 className="text-3xl font-main font-bold pb-7">Login</h2>

          <form className="grid align-center gap-4 ">
            <label className="text-xs text-custom-dark font-medium opacity-[80%]">password</label>
            <input
              className=" bg-[#F5F5FB] w-[16rem] border-2 border-[#A8B0FF]  "
              type="text"
              placeholder=""
            />

            <label className="text-xs text-custom-dark font-medium opacity-[80%]">
              username
            </label>
            <input
              className=" bg-[#F5F5FB] w-[16rem] border-2 border-[#A8B0FF] "
              type="text"
              placeholder=""
            />
          </form>

          <div className="grid gap-6 mt-7">
          <div className="grid gap-2.5 mt-7">
          <a className="font-main underline font-semibold text-[#0D0D0D] opacity-50 hover:opacity-100 text-sm" href="{#}">
              Forget password?
            </a>
            <SimpleButton  href="{#}" name="Login" />
            </div>
            
        
            <a className="font-main underline font-semibold text-[#0D0D0D] opacity-50 hover:opacity-100 text-sm mx-20 " href="{#}">
              Create Account
            </a>
          </div>
        </div>
      </div>
    

    </div>


  );
}
