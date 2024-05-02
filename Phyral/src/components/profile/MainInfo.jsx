import '../../index.css';

export function MainInfo({ username, profileImg, location, occupation }) {
    return (
        <>

            <div className='lg:w-[65rem] md:w-[65rem] w-[90vw] p-4 md:p-14 flex flex-col md-flex-row items-start gap-10 rounded-2xl font-main bg-white relative'>

                    <div className='flex flex-col justify-between gap-10 text-[#3D3D3D] '> {/**profile content */}
                    
                        {/**profile image */}
                            <div>
                                <img className='w-32 h-32 md:w-[180px] md:h-[180px] rounded-full' src={profileImg} alt="" />
                            </div>
                        {/**profile image */}


                        {/**profile info */}
                        <div className='flex gap-4 flex-col'>
                            <h1 className='text-[40px] font-secondary font-bold '>{username}</h1>
                            <p className='text-[20px] opacity-75 font-medium'>{occupation}</p>
                            <p className='text-[20px] opacity-75 font-medium'>{location}</p>
                        </div>
                        {/**profile info */}

                    </div> {/**profile content */}
                    
                    {/**edit button */}
                    <div>
                    <a className='text-sm font-semibold opacity-75 absolute top-6 right-8' href="">Edit</a>
                    </div>
                    {/**edit button */}

            </div>

        </>
    )

}