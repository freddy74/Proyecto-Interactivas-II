import myImage from '../assets/imgs/course-placeholder.png';
import '../index.css';

export function CourseCard({ title }) {
    return (
        <>
            
            <div className='p-4 bg-white w-[20rem] rounded-xl'>
                <img className='h-fit w-[30rem]' src={myImage} alt="" />
                <h3 className='text-center font-main font-bold my-5'>{title}</h3>
            </div>
            
        </>
    )

}