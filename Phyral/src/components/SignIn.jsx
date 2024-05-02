import "../index.css";
// import backgroundImage from "../assets/imgs/signinbg.jpg";
import logo from "../assets/imgs/logo.jpg";
import { SimpleButton } from "./SimpleButton.jsx";

export function SignIn() {
  return (
    <div className="bg-[url('./assets/imgs/signinbg.jpg')] bg-cover bg-no-repeat bg-center align-center grid justify-center h-screen">
      <div className="gap-10 m-auto rounded-3xl bg-white p-12">
        <img className="flex m-auto h-full" src={logo} alt="logo" />

        <h2 className="text-3xl font-main font-bold">Sign In</h2>

        <form className="w-[18rem] grid align-center gap-2 md:w-[20rem]">
          <label className="text-xs text-custom-dark font-medium">Name:</label>
          <input
            className="bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />

          <label className="text-xs text-custom-dark font-medium">
            Lastname:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />

          <label className="text-xs text-custom-dark font-medium">
            Username:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
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

          <label className="text-xs text-custom-dark font-medium">
            Confirm Password:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />
        </form>

        <div className="grid gap-4 justify-center mt-7">
          <SimpleButton href="{#}" name="Sign In" />
          <a className="font-main font-semibold text-custom-dark" href="{#}">
            Have an account?
          </a>
        </div>
      </div>
    </div>
  );
}
