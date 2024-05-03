import myImage from '../assets/imgs/course-placeholder.png';
import '../index.css';
import "cally";

export function Calendar() {
    return (
        <>
            <div className="p-6 font-main rounded-lg bg-white">
                <calendar-range months="1"
                    locale="en-GB">
                    <svg class="w-6 h-6 bg-white" 
                        aria-label="Previous"
                        slot="previous"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                    <svg class="w-6 h-6 text-gray-800 dark:text-black bg-white"
                        aria-label="Next"
                        slot="next"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                    <div class="">
                        <calendar-month></calendar-month>
                    </div>
                </calendar-range>
            </div>
        </>
    )

}