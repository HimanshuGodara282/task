import { useState } from 'react'
import image from './assets/img.jpg'
import './App.css'


const App = () => {
  return (
    <div className='w-screen h-screen bg-black flex'>
      
      <div id="left" className=' h-full w-2/5 '></div>
      <div id="right" className=' h-full w-3/5 bg-slate-800 relative overflow-hidden
'>
      <img src={image} alt="" className='w-full h-full object-cover object-top object-center' /></div>
      
      <div id="nav" className=' flex items-center justify-center gap-10 absolute right-0 w-3/5 h-24 bg-slate-500 '>
          <a href="" className="text-center text-lg font-semibold text-white">HOME</a>
          <a href="" className="text-center text-lg font-semibold text-white" >ABOUT</a>
          <a href="" className="text-center text-lg font-semibold text-white">WORKS</a>
          <a href="" className="text-center text-lg font-semibold text-white">BLOG</a>
          <a href="" className="text-center text-lg font-semibold text-white">CONTACT</a>
      </div>

      <div id="name-div" className='absolute bottom-40 left-80 text-white  '> 
        <h2 className='text-5xl font-light'>MY NAME IS</h2>
        <h1 className='text-6xl'>HIMANSHU GODARA</h1>
        <button className='bg-amber-400 text-black px-4 py-2 mt-4' >I'M A UI DEVELOPER</button>
      </div>
    

      

    </div>
  )
}

export default App

