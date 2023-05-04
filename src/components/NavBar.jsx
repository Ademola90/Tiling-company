import React, { useState } from 'react'


const NavBar = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/About"},
    {name:"Service",link:"/Service"},
    {name:"Project",link:"/Project"},
    {name:"Contact",link:"/Contact"}
  ];

  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='items-center justify-between md:flex bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
          <ion-icon name="prism"></ion-icon>
          </span>
          NTC
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
              Links.map ((link) => (
                <li key={link.name} className='md-8 ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-blue-800 duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default NavBar