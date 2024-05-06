import '../../index.css';

import { SimpleButton } from '../SimpleButton';

export function EventCard({ description, eventName, taskImg, category }) {
    return (
        <>
            <div className='w-auto p-4 md:p-2 md:pr-6 flex max-sm:flex-col  items-start gap-6 rounded-[0.75rem] font-main bg-white relative text-custom-dark'>
                <img className='w-[200px] h-[200px] max-sm:w-[100px] max-sm:h-[100px] object-cover rounded-md' src={taskImg} alt="" />
                <div className='flex flex-col gap-5 mt-5'>
                    <h2 className='font-secondary font-bold text-[24px]'>{eventName}</h2>
                    <p className='text-[14px] font-normal opacity-75'>{description}</p>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='text-[14px] font-bold'>{category}</p>
                        <a className='bg-custom-blue text-white px-6 py-1 rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.35)] ' href="">See more</a>
                    </div>
                </div>
            </div>
        </>
    )
}