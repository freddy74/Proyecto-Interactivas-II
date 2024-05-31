import '../../index.css';

export function Notification({notification_name , notification_description, notification_img}) {
    return (
        <>
            <div className="flex gap-[10px] items-center  border-white border-opacity-10 py-[5px]">
                <img className="rounded-full w-[40px] h-[40px] object-cover border-solid border-white border-[2px] " src={notification_img} alt="" />
                <div>
                    <h3 className="font-main font-medium text-[16px] text-white">{notification_name}</h3>
                    <p className="text-[12px] text-white font-main font-light line-clamp-2">{notification_description}</p>
                </div>
            </div>
            <div className='border-t-[1px] border-solid border-white border-opacity-20 w-full'></div>
        </>
    )
}