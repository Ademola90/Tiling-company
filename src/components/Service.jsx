import React from 'react'
import mosaicHomeP from '../assets/mosaicHomeP.jpg'
import Footer from './Footer'


const Service = () => {
  return (
    <div className='mt-28'>
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

        </div>
        <div className='basis-1/2 mt-10 md:mt-0'>
          <img className='h-96' style={{ width: "100%" }} src={mosaicHomeP} alt="discription" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Service