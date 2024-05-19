import "../index.css";
// import backgroundImage from "../assets/imgs/signinbg.jpg";
import logo from "../assets/imgs/logo.jpg";
import { SimpleButton } from "../SimpleButton.jsx";
import React from "react";

export function LogIn() {
    return (
        <div className="bg-[url('./assets/imgs/signinbg.jpg')] justify-center flex-wrap md:gap-60 bg-cover bg-no-repeat bg-center flex items-center min-h-screen">
 
            <div>
                <div className="space-y-10 w-[18rem] grid justify-center">
                    <h2 className="text-custom-dark text-9xl hidden font-bold sm:block">Discover Phyral universe</h2>
                    <p className="text-base hidden sm:block">Lorem ipsum dolor sit amet consectetur. Nibh volutpat elementum massa
                        sollicitudin varius rhoncus sapien. Blandit ipsum eget tempor diam nunc tincidunt nunc
                        et. At blandit condimentum at tortor orci vulputate tincidunt tellus eros. Et blandit adipiscing vitae enim eget. Et adipiscing non arcu non
                        eget. Dui porta fermentum lacus.
                    </p>
                </div>
            </div>

            <div className="  rounded-3xl bg-white p-12 grid items-center justify-center" >
                <img className="m-auto pb-10 " src={logo} alt="logo" />

                <h2 className="text-3xl font-main font-bold pb-7">Login</h2>

                <form className="w-[18rem] grid align-center gap-4 md:w-[20rem]">
                    <label className="text-xs text-custom-dark font-medium">Username:</label>
                    <input
                        className="bg-background-main rounded-[4px]"
                        type="text"
                        placeholder=""
                    />

                    <label className="text-xs text-custom-dark font-medium">
                        Password:
                    </label>
                    <input
                        className=" bg-background-main rounded-[4px]"
                        type="text"
                        placeholder=""
                    />


                </form>

                <div className="grid gap-4 mt-7">
                    <SimpleButton href="{#}" name="Login" />
                    <a className="font-main underline font-semibold text-[#0D0D0D] opacity-50 text-sm hover:opacity-100" href="{#}">
                        Create account
                    </a>
                </div>
            </div>

        </div>

    );
}
