import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Slider } from './components/Slider.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Welcome } from './components/Welcome.jsx'
// import { CourseCard } from './components/CourseCard.jsx'
import { HorizontalCard } from './components/HorizontalCard.jsx'
import { SimpleButton } from './components/SimpleButton.jsx'
import backgroundImage from './assets/imgs/signinbg.jpg'
import logo from './assets/imgs/logo.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="app" style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
  }}>

    <div className='align-center grid justify-center gap-10 bg-white w-[50vw] m-auto p-10 rounded-3xl' >

    <div className='mt-10 mb-10'>
    <img className='h-full ml-20 ' src={logo} alt="logo" />
    </div>

      <h2 className='text-3xl font-main font-bold'>Sign In</h2>

      <form className='grid align-center gap-2'>
        <label className='text-xs text-custom-dark font-medium'>Name:</label>
        <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
      </form>
      <form className='grid align-center gap-2'>
        <label className='text-xs text-custom-dark font-medium'>Lastname:</label>
        <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
      </form>
      <form className='grid align-center gap-2'>
        <label className='text-xs text-custom-dark font-medium'>Username:</label>
        <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
      </form>
      <form className='grid align-center gap-2'>
        <label className='text-xs text-custom-dark font-medium'>Password:</label>
        <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
      </form>
      <form className='grid align-center gap-2'>
        <label  className='text-xs text-custom-dark font-medium'>Confirm Password:</label>
        <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
      </form>

      <div className='grid gap-4 mb-12'>
        <SimpleButton href="{#}" name="Sign In" />
        <a className='font-main font-semibold text-custom-dark' href="{#}">Have an account?</a>
      </div>


    </div>
  </div>
)







{/*ReactDOM.createRoot(document.getElementById('root')).render(
  <>

  

   <Sidebar username='Freddy Garro' />

    <section className='grid grid-cols-1 sm:grid-cols-4 sm:ml-[23rem] p-4 gap-6'>

      <div className="grid col-span-3 mt-5">
        <Welcome username="Freddy" />

        <section className="w-[65rem] mt-5">
          <h3 className='text-2xl font-secondary font-bold mb-5'>Courses</h3>
          <Slider />
        </section>

        <section className="w-[65rem] h-fit mt-5">
          <h3 className='text-2xl font-secondary font-bold mb-5'>For Today</h3>
          <HorizontalCard title="React Homework" course="Web Development" />
        </section>
      </div>

    </section>
  </>
  
)*/}
