import React, { useState } from "react";
import { NotificationIcon } from '../../assets/icons/NotificationIcon';
import { SettingsIcon } from '../../assets/icons/SettingsIcon';
import { Notification } from '../navigation/Notification';
import '../../index.css';
import { CloseIcon } from "../../assets/icons/CloseIcon";

export function NotificationsBar({ notifications_amount }) {
    const [isOpen, setIsOpen] = useState(false);

    const notificationsButton = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <div className="fixed flex justify-end items-center bg-custom-light-blue border-solid border-custom-blue border-[0.5px] border-opacity-50 w-auto h-auto rounded-xl top-5 right-5 z-[999] p-[10px]">
            <div className='relative' id='notifications'>
                {notifications_amount <= 0 ? null : (
                    <div className='mt-[-2px] m-auto items-center justify-center flex absolute top-0 right-0 rounded-full w-[15px] h-[15px] bg-red-500 z-[999]'>
                        <p className='text-[10px] text-white'>{notifications_amount}</p>
                    </div>
                )}
                <button onClick={notificationsButton}>
                    <NotificationIcon w={28} h={28} color="rgb(81 97 255)" />
                </button>

                <div className={`${isOpen ? "top-[40px]" : "top-[-600px]"} absolute right-0 w-[300px] h-[500px] bg-custom-blue rounded-xl transition-all duration-600`}>

                    <button
                        className="absolute top-3 right-3"
                        onClick={notificationsButton}
                    >
                        <CloseIcon w="14px" h="14px" color="white" />
                    </button>

                    <div className="flex flex-col gap-[10px] w-auto h-[200px] m-[20px]">
                        <h2 className="font-main font-medium text-[20px] text-white mb-[10px]">Notifications</h2>
                        
                        {/**SIMPLE NOTIFICATION */}
                        <Notification notification_name={"Tailwindcss's homework"} notification_description={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"} notification_img={"https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"}/>
                        <Notification notification_name={"React's homework"} notification_description={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"} notification_img={"https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png"}/>
                        <Notification notification_name={"New course created"} notification_description={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"} notification_img={"https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
