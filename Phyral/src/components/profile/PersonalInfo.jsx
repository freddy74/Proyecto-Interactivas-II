import '../../index.css';

export function PersonalInfo({ firstName, lastName, role, email }) {
    return (
        <>
            <div className='lg:w-[65rem] md:w-[65rem] w-[90vw] p-4 md:p-14 flex flex-col items-start gap-10 rounded-2xl font-main bg-white relative'>
                {/* Título y botón de edición */}
                <div className='w-full flex justify-between items-center text-custom-dark'>
                    <h1 className='text-2xl md:text-4xl font-secondary font-bold'>Personal Information</h1>
                    {/* Botón de edición con posicionamiento absoluto */}
                    <a className='text-sm font-semibold opacity-75 absolute top-6 right-8' href="">Edit</a>
                </div>

                {/* Contenedor de información */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-custom-dark'>

                    {/* Bloques de información */}
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs md:text-sm opacity-75 font-normal'>First Name</p>
                        <p className='text-base md:text-lg font-bold'>{firstName}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-xs md:text-sm opacity-75 font-normal'>Last Name</p>
                        <p className='text-base md:text-lg font-bold'>{lastName}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-xs md:text-sm opacity-75 font-normal'>Email Address</p>
                        <p className='text-base md:text-lg font-bold'>{email}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-xs md:text-sm opacity-75 font-normal'>Role</p>
                        <p className='text-base md:text-lg font-bold'>{role}</p>
                    </div>
                    {/* Bloques de información */}
                </div>
                {/* Contenedor de información */}
            </div>
        </>
    )
}