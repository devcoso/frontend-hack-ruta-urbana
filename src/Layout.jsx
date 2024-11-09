import React from 'react'

function Layout() {
  return (
    <div className='flex flex-col md:flex-row items-center gap-2 bg-white shadow-lg py-5 px-5'>
        <img src='./aty.png' alt='logo' className='w-36' />
        <h1 className='text-secondary font-bold text-xl md:text-3xl'>Agencia de Transporte de Yucatán</h1>
    </div>
  )
}

export default Layout
