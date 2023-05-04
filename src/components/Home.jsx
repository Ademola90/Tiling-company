import React from 'react'
import homePage1 from '../assets/homePage1.jpg'
import homePage2 from '../assets/homePage2.jpg'
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Service from './Service';
import mosaicHomeP from '../assets/mosaicHomeP.jpg'
import ClientReview from './ClientReview';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {

    navigate('/About');
  }

  const navigateToService = () => {

    navigate('/Service');
  }
  return (
    <div className='mt-20'>
      <div className='mb-10' style={{ backgroundImage: `url(${homePage1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", width: "100%" }}>
        <div className='text-white text-center font-bold md:pt-56 pt-56'>
          <h1 className='text-4xl'>Wellcome to</h1>
          <h3 className='text-3xl'>Nigeria Tiling Company</h3>
        </div>
      </div>


<div className='md:px-10 px-7 mb-10 '>
      <div className='md:mt-10 md:flex flex-row md:space-x-20 bg-gray-50 p-10 rounded-2xl'>

        <div className='basis-1/2 mt-10 md:mt-0' >
          <h3 className='text-3xl font-sans mb-6'>About Us</h3>
          <h4 className='text-2xl mt-4 font-thin mb-8'>Professional Tilers in Nigeria</h4>
          <h6>
            At Nigeria Tiling Company we bring the best tiling services to you. <br /> <br />

            Meticulously selected our tilers have been working for over 15 years. We go through a quality
            check making sure all our tilers are qualified for any tiling projects we might get. <br /> <br />

            Based on customer satisfaction and teamwork we have come a long way to help you in any tiling need
            you might have.
          </h6>
          <button
            onClick={navigateToAbout} className='bg-blue-500 rounded-2xl p-2 w-20 font-sans font-bold mt-8 text-white hover:bg-white hover:text-blue-500 duration-500 '>
            About
          </button>

          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>

        </div>
        <div className='basis-1/2 mt-10 md:mt-0'>
          <img className='h-96' style={{ width: "100%" }} src={homePage2} alt="discription" />
        </div>
      </div>
      </div>

{/* mosaic tiling */}
<div className='md:px-10 px-7 mb-10'>
      <div className='md:mt-10 md:flex flex-row md:space-x-20 bg-gray-50 p-10 rounded-2xl'>

        <div className='basis-1/2 mt-10 md:mt-0'>
          <img className='h-96' style={{ width: "100%" }} src={mosaicHomeP} alt="discription" />
        </div>


        <div className='basis-1/2 mt-10 md:mt-0' >
          <h4 className='text-2xl mt-4 font-thin mb-12'>MOSAIC TILING SERVICES</h4>
          <h6>
          We are professional in installing Mosaic tiles, with many years of experience. 
           They are used in luxurious steam rooms, swimming pools, bathrooms, Spas, or leisure 
           centers.
          </h6>
          <button
            onClick={navigateToService} className='bg-blue-500 rounded-2xl p-2 w-20 font-sans font-bold mt-20 text-white hover:bg-white hover:text-blue-500 duration-500 '>
            Service
          </button>

          <Routes>
            <Route path="/service" element={<Service />} />
          </Routes>

        </div>

      </div>
      </div>

    {/* large format production */}
    <div className='md:px-10 px-7 mb-10'>
    <div className='md:mt-10 md:flex flex-row md:space-x-20 bg-gray-50 p-10 rounded-2xl'>
        <div className='basis-1/2 mt-10 md:mt-0' >
          <h4 className='text-2xl mt-4 font-thin mb-20'>LARGE FORMAT CERAMIC TILERS</h4>
          <h6>
            At Nigeria Tiling Company we bring the best tiling services to you.

            Meticulously selected our tilers have been working for over 15 years. <br /> <br /> We go through a quality
            check making sure all our tilers are qualified for any tiling projects we might get.

            Based on customer satisfaction and teamwork we have come a long way to help you in any tiling need
            you might have.
          </h6>
          <button
            onClick={navigateToService} className='bg-blue-500 rounded-2xl p-2 w-20 font-sans font-bold mt-10 text-white hover:bg-white hover:text-blue-500 duration-500 '>
            About
          </button>

          <Routes>
            <Route path="/about" element={<Service />} />
          </Routes>

        </div>
        <div className='basis-1/2 mt-10 md:mt-0'>
          <img className='h-96' style={{ width: "100%" }} src={homePage2} alt="discription" />
        </div>
      </div>
    </div>

    {/* marble tiling */}
    <div className='md:px-10 px-7 mb-10'>
      <div className='md:mt-10 md:flex flex-row md:space-x-20 bg-gray-50 p-10 rounded-2xl'>

        <div className='basis-1/2 mt-10 md:mt-0'>
          <img className='h-96' style={{ width: "100%" }} src={mosaicHomeP} alt="discription" />
        </div>


        <div className='basis-1/2 mt-10 md:mt-0' >
          <h4 className='text-2xl mt-4 font-thin mb-20'>MARBLE TILING</h4>
          <h6>
          For centuries, marble has been used in architecture and design due to its sophisticated aesthetics. 
          It requires good maintenance and proper installation by professional tilers.
          </h6>
          <button
            onClick={navigateToService} className='bg-blue-500 rounded-2xl p-2 w-20 font-sans font-bold mt-16 text-white hover:bg-white hover:text-blue-500 duration-500 '>
            Service
          </button>

          <Routes>
            <Route path="/service" element={<Service />} />
          </Routes>

        </div>

      </div>
      </div>
      <ClientReview/>
      <Footer/>      
    </div>
  )
}

export default Home