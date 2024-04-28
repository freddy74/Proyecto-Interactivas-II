import myImage from '../assets/imgs/task-placeholder.png';
import '../index.css';

export function SimpleButton({ href, name }) {
    return (
        <>
            <a className='font-main font-semibold text-white bg-custom-blue px-10 py-4 w-fit rounded-md hover:bg-[#7F8BFF] transition-all' href={href}>{name}</a>
        </>
    )

}