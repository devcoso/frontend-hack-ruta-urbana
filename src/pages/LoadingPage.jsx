
import React from 'react'

function LoadingPage() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div>
        <img src='./aty.png' alt='logo' className='w-72' />
        <h1 className='text-secondary text-3xl font-bold text-center my-5'>Cargando...</h1>
        <div className="w-20 h-20 border-8 border-t-8 border-gray-200 rounded-full animate-spin border-t-transparent m-auto"></div>
      </div>
    </div>
  )
}

export default LoadingPage
