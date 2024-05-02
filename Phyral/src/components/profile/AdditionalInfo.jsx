import '../../index.css';

export function AdditionalInfo() {
    return (
        <>

        <div className='lg:w-[65rem] md:w-[65rem] w-[90vw] p-4 md:p-14 flex flex-col items-start gap-10 rounded-2xl font-main bg-white relative'>

            {/* Título y botón de edición */}
            <div className='w-full flex justify-between items-center text-[#3D3D3D]'>
                <h1 className='text-2xl md:text-4xl font-secondary font-bold'>Additional Information</h1>
                {/* Botón de edición con posicionamiento absoluto */}
                <a className='text-sm font-semibold opacity-75 absolute top-6 right-8' href="">Edit</a>
            </div>

        </div>

    </>
    )

}