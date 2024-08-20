import { useState } from 'react'
import Navbar from './components/navbar'
import H1 from './components/h1'
import Header from './components/header'
import EmBreve from './components/emBreve'
import About from './components/about'
import Contact from './components/contact'

function App() {
  

  return (
    <>
    <div id='home' className='overflow-hidden'>
      <Header/>
      <Navbar/>
      <section className='w-full h-auto flex flex-col items-center justify-center border-b-2 lg:h-[800px] lg:flex-row lg:gap-[500px]'>
        <H1/>
      </section>
      <section id="cases" className='w-full h-auto flex flex-col items-center gap-8 p-6 border-b-2 lg:h-[800px] lg:flex-row lg:gap-20'>
        <div className='transform lg:-rotate-90 font-manrope tracking-widest text-2xl lg:text-3xl font-bold'>
          <h2 className='font-manrope text-28px py-12 lg:px-12'>
            Cases
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          <EmBreve/>
          <EmBreve/>
          <EmBreve/>
        </div>
      </section>
      <section id='sobre' className='w-full h-auto flex flex-col border-b-2'>
        <About/>
      </section>
      <section id='contato' className='w-full h-auto flex flex-col items-center justify-center'>
        <Contact/>
      </section>
    </div>
  </>
  )
}

export default App
