import myImage from '../assets/imgs/logo-phyral-white.svg';
import '../index.css';

export function Sidebar({username}) {
    return (
        <div className="bg-[#5161FF] w-[350px] fixed top-0 left-0 h-full grid justify-center content-around font-main">
            <img className='' src={myImage} alt="logo" />

            <div className="w-fit h-fit grid grid-flow-col bg-white/20 p-3 pr-5 rounded-[50px] gap-4 items-center">
                <img className="rounded-[50%] w-[5rem] h-[5rem]" src="https://unavatar.io/freddy74" alt="User Profile" />
                <div>
                    <h3 className='font-medium font-secondary text-xl text-white'>{username}</h3>
                    <a href='#' className='text-sm text-white/60'>View Profile</a>
                </div>
            </div>

            <div className='grid gap-8 ml-6 text-white font-bold justify-between'>
                <a className='flex gap-4 p-3 hover:bg-white/25 hover:rounded-3xl hover:shadow-lg' href=''><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_257_172)">
                        <path d="M13.75 0H2.75C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 10.0833H13.75V0Z" fill="white" />
                        <path d="M19.2497 0H15.583V10.0833H21.9996V2.75C21.9996 2.02065 21.7099 1.32118 21.1942 0.805456C20.6785 0.289731 19.979 0 19.2497 0V0Z" fill="white" />
                        <path d="M6.41667 11.917H0V19.2503C0 19.9797 0.289731 20.6791 0.805456 21.1949C1.32118 21.7106 2.02065 22.0003 2.75 22.0003H6.41667V11.917Z" fill="white" />
                        <path d="M22 11.917H8.25V22.0003H19.25C19.9793 22.0003 20.6788 21.7106 21.1945 21.1949C21.7103 20.6791 22 19.9797 22 19.2503V11.917Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_257_172">
                            <rect width="22" height="22" fill="white" />
                        </clipPath>
                    </defs></svg>
                    Dashboard</a>
                <a className='flex gap-4 p-3 hover:bg-white/25 hover:rounded-3xl hover:shadow-lg' href=''><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_257_170)">
                        <path d="M2.75 20.1447C2.50688 20.1447 2.27373 20.0481 2.10182 19.8762C1.92991 19.7043 1.83333 19.4711 1.83333 19.228V0H0V19.228C0 19.9573 0.289731 20.6568 0.805456 21.1725C1.32118 21.6883 2.02065 21.978 2.75 21.978H22V20.1447H2.75Z" fill="white" />
                        <path d="M6.41634 11H4.58301V17.4167H6.41634V11Z" fill="white" />
                        <path d="M11.0003 9.1665H9.16699V17.4165H11.0003V9.1665Z" fill="white" />
                        <path d="M15.5833 11.9165H13.75V17.4165H15.5833V11.9165Z" fill="white" />
                        <path d="M20.1664 8.25H18.333V17.4167H20.1664V8.25Z" fill="white" />
                        <path d="M10.083 4.04614L14.6663 8.62947L21.7311 1.56472L20.4349 0.268555L14.6663 6.03714L10.083 1.4538L4.85156 6.68522L6.14773 7.98139L10.083 4.04614Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_257_170">
                            <rect width="22" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    Overview</a>
                <a className='flex gap-4 p-3 hover:bg-white/25 hover:rounded-3xl hover:shadow-lg' href=''><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_257_174)">
                        <path d="M19 2V0H17V2H15V0H13V2H11V0H9V2H7V0H5V2H3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V2H19ZM13 17H7V15H13V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_257_174">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    Tasks</a>
                <a className='flex gap-4 p-3 hover:bg-white/25 hover:rounded-3xl hover:shadow-lg' href=''><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_257_173)">
                        <path d="M5.95833 16.042H0V19.2503C0 19.9797 0.289731 20.6791 0.805456 21.1949C1.32118 21.7106 2.02065 22.0003 2.75 22.0003H5.95833V16.042Z" fill="white" />
                        <path d="M22.0003 16.042H16.042V22.0003H19.2503C19.9797 22.0003 20.6791 21.7106 21.1949 21.1949C21.7106 20.6791 22.0003 19.9797 22.0003 19.2503V16.042Z" fill="white" />
                        <path d="M5.95833 8.02051H0V13.9788H5.95833V8.02051Z" fill="white" />
                        <path d="M22.0003 8.02051H16.042V13.9788H22.0003V8.02051Z" fill="white" />
                        <path d="M5.95833 0H2.75C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 5.95833H5.95833V0Z" fill="white" />
                        <path d="M13.9788 16.042H8.02051V22.0003H13.9788V16.042Z" fill="white" />
                        <path d="M13.9788 8.02051H8.02051V13.9788H13.9788V8.02051Z" fill="white" />
                        <path d="M13.9788 0H8.02051V5.95833H13.9788V0Z" fill="white" />
                        <path d="M19.2503 0H16.042V5.95833H22.0003V2.75C22.0003 2.02065 21.7106 1.32118 21.1949 0.805456C20.6791 0.289731 19.9797 0 19.2503 0V0Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_257_173">
                            <rect width="22" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    Courses</a>
            </div>

            <div className='grid gap-8 ml-6 text-white font-bold justify-between'>
                <a className='flex gap-4 p-3 hover:bg-white/25 hover:rounded-3xl hover:shadow-lg' href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_257_171)">
                        <path d="M21.0004 12C21.0002 11.4483 20.95 10.8977 20.8504 10.355L23.8934 8.6L20.8934 3.4L17.8494 5.159C17.009 4.43993 16.0432 3.88194 15.0004 3.513V0H9.00042V3.513C7.95768 3.88194 6.99187 4.43993 6.15142 5.159L3.10742 3.4L0.107422 8.6L3.15042 10.355C2.95053 11.4426 2.95053 12.5574 3.15042 13.645L0.107422 15.4L3.10742 20.6L6.15142 18.842C6.99195 19.5607 7.95775 20.1184 9.00042 20.487V24H15.0004V20.487C16.0432 20.1181 17.009 19.5601 17.8494 18.841L20.8934 20.6L23.8934 15.4L20.8504 13.645C20.95 13.1023 21.0002 12.5517 21.0004 12V12ZM15.0004 12C15.0004 12.5933 14.8245 13.1734 14.4948 13.6667C14.1652 14.1601 13.6967 14.5446 13.1485 14.7716C12.6003 14.9987 11.9971 15.0581 11.4152 14.9424C10.8332 14.8266 10.2987 14.5409 9.8791 14.1213C9.45954 13.7018 9.17382 13.1672 9.05807 12.5853C8.94231 12.0033 9.00172 11.4001 9.22878 10.8519C9.45585 10.3038 9.84036 9.83524 10.3337 9.50559C10.8271 9.17595 11.4071 9 12.0004 9C12.7961 9 13.5591 9.31607 14.1217 9.87868C14.6844 10.4413 15.0004 11.2044 15.0004 12Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_257_171">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    Settings</a>
                <a className='flex gap-4 p-3 hover:bg-white/25 hover:rounded-3xl hover:shadow-lg' href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_257_199)">
                        <path d="M22.7632 10.2313L17.8132 5.28125L16.4002 6.69925L20.7002 10.9993H6.61719V12.9993H20.7002L16.4002 17.2993L17.8142 18.7133L22.7642 13.7633C22.9964 13.5311 23.1806 13.2555 23.3063 12.9521C23.432 12.6488 23.4967 12.3236 23.4967 11.9953C23.4967 11.6669 23.432 11.3417 23.3063 11.0384C23.1806 10.735 22.9964 10.4594 22.7642 10.2273L22.7632 10.2313Z" fill="white" />
                        <path d="M10.476 21C10.476 21.2652 10.3706 21.5196 10.1831 21.7071C9.99557 21.8946 9.74122 22 9.476 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H9.476C9.74122 2 9.99557 2.10536 10.1831 2.29289C10.3706 2.48043 10.476 2.73478 10.476 3V8.333H12.476V3C12.476 2.20435 12.1599 1.44129 11.5973 0.87868C11.0347 0.31607 10.2716 0 9.476 0L3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H9.476C10.2716 24 11.0347 23.6839 11.5973 23.1213C12.1599 22.5587 12.476 21.7956 12.476 21V15.667H10.476V21Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_257_199">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    Log out</a>
            </div>


        </div>

    )
}
