import { useState } from "react";
import myImage from "../../assets/imgs/logo-phyral-white.svg";
import "../../index.css";
import { NavLink } from "react-router-dom";

export function Sidebar({ username }) {
  const [isOpen, setIsOpen] = useState(false);
  function sidebarButton() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <div className="fixed lg:hidden z-50 w-[100vw] m-auto flex items-center justify-center pt-[20px]">
        <div className="flex items-center justify-between w-[90vw] py-[20px] rounded-xl bg-custom-blue">
          <button className="mx-4" onClick={sidebarButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-[30px] h-[30px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/**PHYRAL LOGO */}
          <svg width="40" height="40" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3.89589C16 6.42821 15.6707 8.64629 15.0105 10.552C14.352 12.4595 13.4936 14.0528 12.4386 15.3336C11.3836 16.6163 10.1894 17.5848 8.85594 18.2427C7.52247 18.9006 6.19719 19.2295 4.87847 19.2295C3.23702 19.2295 2.01495 18.794 1.20897 17.9229C0.40299 17.0519 0 15.9915 0 14.7419C0 13.6907 0.242449 12.8362 0.725709 12.1783C1.20897 11.5204 1.81673 10.9636 2.54899 10.5024C3.28125 10.0429 4.07904 9.63864 4.94399 9.295C5.80731 8.94951 6.60674 8.58933 7.339 8.21076C8.07126 7.83404 8.67902 7.38932 9.16228 6.88028C9.64554 6.37124 9.88799 5.7207 9.88799 4.93234C9.88799 3.97858 9.49974 3.19022 8.72325 2.5654C7.94676 1.94059 6.85574 1.62819 5.44855 1.62819C4.6868 1.62819 3.96109 1.70169 3.27306 1.85055C2.58503 1.99756 1.75612 2.23646 0.789598 2.5654C2.08211 1.70904 3.33367 1.06769 4.55083 0.641351C5.76636 0.215009 7.01955 0 8.30879 0C10.2123 0 11.6113 0.411641 12.5058 1.23308C13.3986 2.05453 13.8458 3.00829 13.8458 4.09252C13.8458 4.98012 13.5968 5.67109 13.0988 6.16359C12.6008 6.65608 11.9701 7.05119 11.2084 7.34705C10.4466 7.64292 9.63243 7.9149 8.76912 8.16115C7.90417 8.4074 7.09163 8.71245 6.32989 9.07264C5.56814 9.43466 4.93744 9.91062 4.43944 10.5024C3.94144 11.0941 3.69243 11.9155 3.69243 12.9685C3.69243 13.6595 3.80219 14.242 4.02171 14.718C4.24122 15.194 4.53445 15.5891 4.9014 15.9015C5.26671 16.2139 5.67789 16.4362 6.13167 16.5667C6.58544 16.699 7.0474 16.7633 7.51592 16.7633C8.48244 16.7633 9.45715 16.484 10.4384 15.9254C11.4197 15.3667 12.3059 14.5453 13.0972 13.4592C13.8884 12.375 14.5322 11.0279 15.0302 9.41628C15.5282 7.80647 15.6756 5.94858 15.6756 3.87751L15.9967 3.89405L16 3.89589Z" fill="white" />
          </svg>
          {/**PHYRAL LOGO */}

          <button className="mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="white"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
          </button>
        </div>
      </div>

      <aside
        className={`${isOpen ? "left-0" : "left-[-30rem]"
          } bg-custom-blue w-[300px] fixed top-0 left-0 h-full grid gap-[30px] justify-center content-around font-main z-50 transition-all duration-500 lg:left-0`}
      >
        <button
          className="absolute top-0 left-[19rem] lg:hidden"
          onClick={sidebarButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="#3D3D3D"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-[40px]">
          <img className="" src={myImage} alt="logo" />

          <div className="flex bg-white/10 rounded-[50px] p-[10px] gap-[20px] items-center">
            <img
              className="rounded-[50%] w-[5rem] h-[5rem]"
              src="https://unavatar.io/freddy74"
              alt="User Profile"
            />
            <div>
              <h3 className="font-medium font-secondary text-xl text-white">
                {username}
              </h3>
              <NavLink to="/profile" className="text-sm text-white/60">
                View Profile
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col text-white font-bold gap-[20px]">
            <NavLink
              to="/"
              aria-current="page"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_257_172)">
                  <path
                    d="M13.75 0H2.75C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 10.0833H13.75V0Z"
                    fill="white"
                  />
                  <path
                    d="M19.2497 0H15.583V10.0833H21.9996V2.75C21.9996 2.02065 21.7099 1.32118 21.1942 0.805456C20.6785 0.289731 19.979 0 19.2497 0V0Z"
                    fill="white"
                  />
                  <path
                    d="M6.41667 11.917H0V19.2503C0 19.9797 0.289731 20.6791 0.805456 21.1949C1.32118 21.7106 2.02065 22.0003 2.75 22.0003H6.41667V11.917Z"
                    fill="white"
                  />
                  <path
                    d="M22 11.917H8.25V22.0003H19.25C19.9793 22.0003 20.6788 21.7106 21.1945 21.1949C21.7103 20.6791 22 19.9797 22 19.2503V11.917Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_257_172">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Dashboard
            </NavLink>

            <NavLink
              to="/overview"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
              href=""
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_257_170)">
                  <path
                    d="M2.75 20.1447C2.50688 20.1447 2.27373 20.0481 2.10182 19.8762C1.92991 19.7043 1.83333 19.4711 1.83333 19.228V0H0V19.228C0 19.9573 0.289731 20.6568 0.805456 21.1725C1.32118 21.6883 2.02065 21.978 2.75 21.978H22V20.1447H2.75Z"
                    fill="white"
                  />
                  <path
                    d="M6.41634 11H4.58301V17.4167H6.41634V11Z"
                    fill="white"
                  />
                  <path
                    d="M11.0003 9.1665H9.16699V17.4165H11.0003V9.1665Z"
                    fill="white"
                  />
                  <path
                    d="M15.5833 11.9165H13.75V17.4165H15.5833V11.9165Z"
                    fill="white"
                  />
                  <path
                    d="M20.1664 8.25H18.333V17.4167H20.1664V8.25Z"
                    fill="white"
                  />
                  <path
                    d="M10.083 4.04614L14.6663 8.62947L21.7311 1.56472L20.4349 0.268555L14.6663 6.03714L10.083 1.4538L4.85156 6.68522L6.14773 7.98139L10.083 4.04614Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_257_170">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Overview
            </NavLink>

            <NavLink
              to="/events"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_257_174)">
                  <path
                    d="M19 2V0H17V2H15V0H13V2H11V0H9V2H7V0H5V2H3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V2H19ZM13 17H7V15H13V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_257_174">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Tasks
            </NavLink>

            <a
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
              href=""
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_257_173)">
                  <path
                    d="M5.95833 16.042H0V19.2503C0 19.9797 0.289731 20.6791 0.805456 21.1949C1.32118 21.7106 2.02065 22.0003 2.75 22.0003H5.95833V16.042Z"
                    fill="white"
                  />
                  <path
                    d="M22.0003 16.042H16.042V22.0003H19.2503C19.9797 22.0003 20.6791 21.7106 21.1949 21.1949C21.7106 20.6791 22.0003 19.9797 22.0003 19.2503V16.042Z"
                    fill="white"
                  />
                  <path
                    d="M5.95833 8.02051H0V13.9788H5.95833V8.02051Z"
                    fill="white"
                  />
                  <path
                    d="M22.0003 8.02051H16.042V13.9788H22.0003V8.02051Z"
                    fill="white"
                  />
                  <path
                    d="M5.95833 0H2.75C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 5.95833H5.95833V0Z"
                    fill="white"
                  />
                  <path
                    d="M13.9788 16.042H8.02051V22.0003H13.9788V16.042Z"
                    fill="white"
                  />
                  <path
                    d="M13.9788 8.02051H8.02051V13.9788H13.9788V8.02051Z"
                    fill="white"
                  />
                  <path
                    d="M13.9788 0H8.02051V5.95833H13.9788V0Z"
                    fill="white"
                  />
                  <path
                    d="M19.2503 0H16.042V5.95833H22.0003V2.75C22.0003 2.02065 21.7106 1.32118 21.1949 0.805456C20.6791 0.289731 19.9797 0 19.2503 0V0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_257_173">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Courses
            </a>

            <a
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
              href=""
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_257_171)">
                  <path
                    d="M21.0004 12C21.0002 11.4483 20.95 10.8977 20.8504 10.355L23.8934 8.6L20.8934 3.4L17.8494 5.159C17.009 4.43993 16.0432 3.88194 15.0004 3.513V0H9.00042V3.513C7.95768 3.88194 6.99187 4.43993 6.15142 5.159L3.10742 3.4L0.107422 8.6L3.15042 10.355C2.95053 11.4426 2.95053 12.5574 3.15042 13.645L0.107422 15.4L3.10742 20.6L6.15142 18.842C6.99195 19.5607 7.95775 20.1184 9.00042 20.487V24H15.0004V20.487C16.0432 20.1181 17.009 19.5601 17.8494 18.841L20.8934 20.6L23.8934 15.4L20.8504 13.645C20.95 13.1023 21.0002 12.5517 21.0004 12V12ZM15.0004 12C15.0004 12.5933 14.8245 13.1734 14.4948 13.6667C14.1652 14.1601 13.6967 14.5446 13.1485 14.7716C12.6003 14.9987 11.9971 15.0581 11.4152 14.9424C10.8332 14.8266 10.2987 14.5409 9.8791 14.1213C9.45954 13.7018 9.17382 13.1672 9.05807 12.5853C8.94231 12.0033 9.00172 11.4001 9.22878 10.8519C9.45585 10.3038 9.84036 9.83524 10.3337 9.50559C10.8271 9.17595 11.4071 9 12.0004 9C12.7961 9 13.5591 9.31607 14.1217 9.87868C14.6844 10.4413 15.0004 11.2044 15.0004 12Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_257_171">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Settings
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] text-white font-bold ">
          <div className="border-solid border-[1px] border-white border-opacity-75 rounded-full w-full h-auto"></div>

          <a
            className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            href=""
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_257_199)">
                <path
                  d="M22.7632 10.2313L17.8132 5.28125L16.4002 6.69925L20.7002 10.9993H6.61719V12.9993H20.7002L16.4002 17.2993L17.8142 18.7133L22.7642 13.7633C22.9964 13.5311 23.1806 13.2555 23.3063 12.9521C23.432 12.6488 23.4967 12.3236 23.4967 11.9953C23.4967 11.6669 23.432 11.3417 23.3063 11.0384C23.1806 10.735 22.9964 10.4594 22.7642 10.2273L22.7632 10.2313Z"
                  fill="white"
                />
                <path
                  d="M10.476 21C10.476 21.2652 10.3706 21.5196 10.1831 21.7071C9.99557 21.8946 9.74122 22 9.476 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H9.476C9.74122 2 9.99557 2.10536 10.1831 2.29289C10.3706 2.48043 10.476 2.73478 10.476 3V8.333H12.476V3C12.476 2.20435 12.1599 1.44129 11.5973 0.87868C11.0347 0.31607 10.2716 0 9.476 0L3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H9.476C10.2716 24 11.0347 23.6839 11.5973 23.1213C12.1599 22.5587 12.476 21.7956 12.476 21V15.667H10.476V21Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_257_199">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Log out
          </a>
        </div>
      </aside>
    </>
  );
}
