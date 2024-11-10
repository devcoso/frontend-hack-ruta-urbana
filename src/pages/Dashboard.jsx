import { useState } from 'react'
import BarChart from '../components/BarChart'


function Dashboard() {

  

  return (
    <>
      <h1 className='text-primary text-4xl font-bold text-center my-5'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 m-auto gap-2'>
        <BarChart 
          title='Índices más bajos de Aforo/Población por ABEG' 
          typeOfValue='Aforo/Población' 
          labels={['176', '177', '178', '23', '12', '11', '1']} 
          data_to_show={[65, 59, 80, 81, 56, 55, 40]}
          xLabel='ABEG'
          yLabel='Aforo/Población'
          color='#d11a1a'
        />
        <BarChart 
          title='Índices más altos de Aforo/Población por ABEG' 
          typeOfValue='Aforo/Población' 
          labels={['176', '177', '178', '23', '12', '11', '1']} 
          data_to_show={[65, 59, 80, 81, 56, 55, 40]}
          xLabel='ABEG'
          yLabel='Aforo/Población'
          color='#59af31'
        />
      </div>




    </>
  )
}

export default Dashboard
