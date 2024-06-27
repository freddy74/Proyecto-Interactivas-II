import { useState } from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

import { DashboardIcon } from "../../assets/icons/DashboardIcon";
import { OverviewIcon } from "../../assets/icons/OverviewIcon";
import { TaskIcon } from "../../assets/icons/TaskIcon";
import { CourseIcon } from "../../assets/icons/CourseIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { LogoTextIcon } from "../../assets/icons/LogoTextIcon";
import { HamburgerIcon } from "../../assets/icons/HamburgerIcon";
import { NotificationIcon } from "../../assets/icons/NotificationIcon";
import { XIcon } from "../../assets/icons/XIcon";
import { useAuth } from "../hooks/useAuth";

export function Sidebar({ username }) {
  const [isOpen, setIsOpen] = useState(false);
  function sidebarButton() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  const { logout } = useAuth();

  const { isAuthenticated } = useAuth();
  const userId = JSON.parse(localStorage.getItem("user")).id;

  return (
    <>
      <div className="fixed lg:hidden z-50 w-[100vw] m-auto flex items-center justify-center pt-[20px]">
        <div className="flex items-center justify-between w-[90vw] py-[20px] rounded-xl bg-custom-blue">
          <button className="mx-4" onClick={sidebarButton}>
            <HamburgerIcon />
          </button>

          <LogoIcon width="40px" height="40px" />

          <button className="mx-4">
            <NotificationIcon />
          </button>
        </div>
      </div>

      <aside
        className={`${
          isOpen ? "left-0" : "left-[-30rem]"
        } bg-custom-blue w-[300px] rounded-tr-[3rem] fixed top-0 left-0 h-full grid gap-[30px] justify-center content-around font-main z-50 transition-all duration-500 lg:left-0`}
      >
        <button
          className="absolute top-0 left-[19rem] lg:hidden"
          onClick={sidebarButton}
        >
          <XIcon />
        </button>

        <div className="flex flex-col gap-[40px]">
          <div className="flex justify-center items-center gap-4 mt-[40px]">
            <LogoIcon width="60px" height="60px" />
            <LogoTextIcon />
          </div>
          <div className="flex bg-white/10 rounded-[50px] p-[10px] pr-[20px] gap-[20px] items-center">
            <img
              className="rounded-[50%] w-[60px] h-[60px]"
              src="https://unavatar.io/freddy74"
              alt="User Profile"
            />
            <div>
              <h3 className="font-medium font-secondary text-xl text-white">
                {username}
              </h3>

              <NavLink
                to={isAuthenticated() ? `/overview/${userId}` : "/login"}
                className="text-sm text-white/60"
              >
                View Profile
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col text-white font-bold gap-[20px]">
            <NavLink
              to={isAuthenticated() ? `/dashboard/${userId}` : "/login"}
              aria-current="page"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <DashboardIcon />
              Dashboard
            </NavLink>

            <NavLink
              to={isAuthenticated() ? `/overview/${userId}` : "/login"}
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <OverviewIcon />
              Overview
            </NavLink>

            <NavLink
              to={isAuthenticated() ? `/events/${userId}` : "/login"}
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <TaskIcon />
              Tasks
            </NavLink>

            <NavLink
              to={isAuthenticated() ? `/form/${userId}` : "/login"}
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <SettingsIcon w={26} h={26} color={"white"} />
              Settings
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] text-white font-bold ">
          <div className="border-solid border-[1px] border-white border-opacity-75 rounded-full w-full h-auto"></div>

          <button
            onClick={logout}
            className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
          >
            <LogoutIcon />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}
