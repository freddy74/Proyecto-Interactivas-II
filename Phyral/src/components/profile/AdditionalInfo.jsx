import '../../index.css';

export function AdditionalInfo({ hours, diseases, sports }) {
    return (
        <>
            <div className='lg:w-[65rem] md:w-[65rem] w-[90vw] p-4 md:p-14 flex flex-col items-start gap-10 rounded-2xl font-main bg-white relative'>
                {/* Título y botón de edición */}
                <div className='w-full flex justify-between items-center text-custom-dark'>
                    <h1 className='text-2xl md:text-4xl font-secondary font-bold'>Additional Information</h1>
                    {/* Botón de edición con posicionamiento absoluto */}
                    <a className='text-sm font-semibold opacity-75 absolute top-6 right-8' href="">Edit</a>
                </div>
                {/* Título y botón de edición */}

                {/* Contenedor de información */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-custom-dark'>
                    {/* Bloques de información */}
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2  '>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2551_13)">
                                    <path d="M23.121 7.1221L20.707 4.7071L22.707 2.7071L21.293 1.2931L19.293 3.2931L16.879 0.879103C16.6004 0.600474 16.2696 0.37945 15.9056 0.228654C15.5416 0.0778583 15.1515 0.000244141 14.7575 0.000244141C14.3635 0.000244141 13.9733 0.0778583 13.6093 0.228654C13.2453 0.37945 12.9146 0.600474 12.636 0.879103L9.80797 3.7071L14.343 8.2431L8.24297 14.3431L3.70697 9.8081L0.87897 12.6361C0.316557 13.1987 0.000610352 13.9616 0.000610352 14.7571C0.000610352 15.5526 0.316557 16.3155 0.87897 16.8781L3.29297 19.2931L1.29297 21.2931L2.70697 22.7071L4.70697 20.7071L7.12097 23.1211C7.39955 23.3997 7.73029 23.6208 8.0943 23.7716C8.45831 23.9223 8.84846 24 9.24247 24C9.63648 24 10.0266 23.9223 10.3906 23.7716C10.7546 23.6208 11.0854 23.3997 11.364 23.1211L14.192 20.2931L9.65697 15.7571L15.757 9.6571L20.292 14.1921L23.12 11.3641C23.6824 10.8015 23.9983 10.0386 23.9983 9.2431C23.9983 8.44761 23.6824 7.68469 23.12 7.1221H23.121Z" fill="#5161FF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2551_13">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='text-xs md:text-sm opacity-75 font-normal'>Actividades Físicas</p>
                        </div>
                        <p className='text-base md:text-lg font-bold'>{sports}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2  '>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2554_8)">
                                    <path d="M5.52285 1.74503L4.45585 0.0560303C2.7298 1.06867 1.22116 2.41282 0.0168457 4.01103L1.67985 5.12003C2.7275 3.75425 4.03321 2.60754 5.52285 1.74503V1.74503Z" fill="#5161FF" />
                                    <path d="M22.3202 5.12003L23.9832 4.01103C22.7788 2.41282 21.2702 1.06867 19.5442 0.0560303L18.4772 1.74503C19.9668 2.60754 21.2725 3.75425 22.3202 5.12003V5.12003Z" fill="#5161FF" />
                                    <path d="M13.0001 2.051V0H11.0001V2.051C8.95442 2.2338 7.00103 2.98687 5.36201 4.2246C3.72299 5.46232 2.4641 7.13506 1.72844 9.05265C0.992777 10.9702 0.809861 13.0558 1.20048 15.0721C1.59111 17.0885 2.5396 18.9548 3.93813 20.459L2.01013 22.577L3.49013 23.923L5.42413 21.8C7.31838 23.2297 9.62693 24.0031 12.0001 24.0031C14.3733 24.0031 16.6819 23.2297 18.5761 21.8L20.5101 23.926L21.9901 22.58L20.0621 20.462C21.4616 18.9579 22.4108 17.0913 22.8019 15.0745C23.1931 13.0577 23.0104 10.9716 22.2746 9.05344C21.5389 7.1353 20.2796 5.46213 18.64 4.22423C17.0005 2.98632 15.0464 2.23337 13.0001 2.051V2.051ZM14.2931 15.707L11.0001 12.414V7H13.0001V11.586L15.7071 14.293L14.2931 15.707Z" fill="#5161FF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2554_8">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-xs md:text-sm opacity-75 font-normal'>Horas de sueño</p>
                        </div>
                        <p className='text-base md:text-lg font-bold'>{hours}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2  '>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2555_11)">
                                    <path d="M22.5348 7.32409L23.9648 5.92409L18.2148 0.0510864L16.7848 1.45109L19.0408 3.75109L16.8618 5.79209L15.9498 4.87909C15.3887 4.31836 14.6283 4.00271 13.835 4.00121C13.0417 3.99972 12.2801 4.31248 11.7168 4.87109L14.9228 8.07709L13.5088 9.49109L10.2998 6.28409L8.71585 7.87009L11.9228 11.0771L10.5088 12.4911L7.29985 9.28409L5.71585 10.8701L8.92285 14.0771L7.50885 15.4911L4.29985 12.2841L2.99985 13.5861V19.5861L0.0428467 22.5431L1.45685 23.9571L4.41385 21.0001H10.4138L19.1208 12.2931C19.3995 12.0145 19.6205 11.6838 19.7713 11.3198C19.9221 10.9557 19.9997 10.5656 19.9997 10.1716C19.9997 9.77758 19.9221 9.38743 19.7713 9.02342C19.6205 8.65941 19.3995 8.32867 19.1208 8.05009L18.2768 7.20709L20.4398 5.18409L22.5348 7.32409Z" fill="#5161FF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2555_11">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='text-xs md:text-sm opacity-75 font-normal'>Problemas de salud</p>
                        </div>
                        <p className='text-base md:text-lg font-bold'>{diseases}</p>
                    </div>
                    {/* Bloques de información */}
                </div>
                {/* Contenedor de información */}
            </div>
        </>
    )

}