import myImage from '../assets/imgs/task-placeholder.png';
import '../index.css';

export function SimpleButton({ href, name }) {
    return (
        <>
                <a className=' font-semibold text-white text-center bg-custom-blue py-4 w-[16rem] rounded-[4px] hover:opacity-90 duration-300 transition-all ' href={href}>{name}</a>
        </>
    )

}