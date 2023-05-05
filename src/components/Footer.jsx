import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Project from './Project'
import Contact from './Contact'

const Footer = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {

    navigate('/About');
  }

  const navigateToService = () => {

    navigate('/Service');
  }

  const navigateToProject = () => {

    navigate('/Project');
  }

  const navigateToContact = () => {

    navigate('/Contact');
  }
  return (
    <div className='text-white bg-black md:px-10 px-7'>
    <div className=' md:flex flex-row mb-10'>

      <div className='basis-2/4 pr-20 pl-20 pt-20 '>
        <h1 className='text-2xl font-bold font-[Poppins] mb-6'>NCT</h1>
        <h6>At Nigeria Tiling Company we bring luxurious bespoke bathrooms
          and the best tiling services to you.
          Meticulously selected our tilers have been working in Italy
          for over 15 years.</h6>
      </div>

      {/* 2 */}
      <div className='basis-1/2 pr-20 pl-20 pt-20'>
        <h1 className='text-2xl font-bold font-[Poppins] mb-6'>Company</h1>
        <div className='cursor-pointer hover:text-blue-500'>Home</div>


        <div onClick={navigateToAbout} className='cursor-pointer hover:text-blue-500 mt-2'>About</div>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <div onClick={navigateToService} className='cursor-pointer hover:text-blue-500 mt-2'>Service</div>
        <Routes>
          <Route path="/service" element={<Service />} />
        </Routes>

        <div onClick={navigateToProject} className='cursor-pointer hover:text-blue-500 mt-2'>Project</div>
        <Routes>
          <Route path="/project" element={<Project />} />
        </Routes>

        <div onClick={navigateToContact} className='cursor-pointer hover:text-blue-500 mt-2'>Contact</div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* 3 */}
      <div className='basis-1/4 pr-20 pl-20 pt-20 '>
        <div>
          <h1 className='text-2xl font-bold font-[Poppins] mb-6'>Get In Touch</h1>
          <div className='flex'>
            <div className=' mr-1 py-2 hover:text-blue-500'>
            <ion-icon name="call"></ion-icon>
            </div>
            <span className='pt-1 hover:text-blue-500'>+234 81 34392733</span>
            
          </div>
        
        <div>
          <div className='flex'>
            <div className='mr-1 py-2 hover:text-blue-500' >
            <ion-icon name="mail"></ion-icon>
            </div>
            <span className='pt-1 hover:text-blue-500'>ademolaabdullahi989@gmail.com</span>
            
          </div>
        </div>
        </div>
      </div>

    </div>
    <div className='text-center'>
      <a href="https://web.facebook.com/ademola.abdullahi.37" className='px-4 cursor-pointer text-2xl hover:text-blue-500'><ion-icon name="logo-facebook"></ion-icon></a>
      <a href="https://twitter.com/Ademola829" className='px-4 cursor-pointer text-2xl hover:text-blue-500'><ion-icon name="logo-twitter"></ion-icon></a>
      <a href="https://www.instagram.com/ademolaabdullai/" className='px-4 cursor-pointer text-2xl hover:text-blue-500'><ion-icon name="logo-instagram"></ion-icon></a>
      <a href="tiktok.com/@hollah90" className='px-4 cursor-pointer text-2xl hover:text-blue-500'><ion-icon name="logo-tiktok"></ion-icon></a>
        
      </div>
    </div>
  )
}

export default Footer