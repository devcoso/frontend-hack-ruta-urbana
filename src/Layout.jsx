import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className='flex flex-col md:flex-row items-center justify-between gap-2 bg-white shadow-lg py-5 px-5 sticky top-0 z-10'>
       <div className="flex items-center">
          <img src='./aty.png' alt='logo' className='w-36' />
          <h1 className='text-secondary font-bold text-xl md:text-3xl'>Agencia de Transporte de Yucatán</h1>
       </div>
        <button className='
          bg-primary 
          text-white 
          font-bold 
          py-2 px-4 
          rounded-md
          hover:bg-secondary
          transition
          duration-300
          ease-in-out
        '>Subir Archivos</button>
      </div>
      <div className='py-10'> 
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
