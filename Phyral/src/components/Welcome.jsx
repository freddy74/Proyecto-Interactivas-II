import '../index.css';
import { SimpleButton } from './SimpleButton.jsx'

export function Welcome({ username }) {
    return (
        <>

            <div className='w-[65rem] p-14 flex items-center justify-between gap-10 rounded-2xl font-main bg-custom-light-blue'>
                <div className='grid gap-4'>
                    <h1 className='text-5xl font-secondary font-black'>Welcome, {username}!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu</p>
                    <SimpleButton href="{#}" name="View Events" />
                </div>
                <div>
                    <p className='bg-custom-green text-center p-10 rounded-lg'>You have 2 pending tasks for today!</p>
                </div>
            </div>

        </>
    )

}