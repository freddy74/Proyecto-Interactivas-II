import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Slider } from './components/Slider.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Welcome } from './components/Welcome.jsx'
import { Calendar } from './components/Calendar.jsx'
import { HorizontalCard } from './components/HorizontalCard.jsx'

import { SimpleButton } from './components/SimpleButton.jsx'
import backgroundImage from './assets/imgs/signinbg.jpg'
import logo from './assets/imgs/logo.jpg'



ReactDOM.createRoot(document.getElementById('root')).render(
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

      <div className="mt-5">
        <Calendar />
      </div>

    </section>
  </>
  
)
