
import BarChart from '../components/BarChart'
import ABEGList from '../components/ABEGList'
import { getData } from '../data/getData'

function Dashboard() {

  const {
    aforo_poblacion_data_menores,
    aforo_poblacion_data_mayores
  } = getData()

  return (
    <>
      <h1 className='text-primary text-4xl font-bold text-center my-5'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 m-auto gap-2'>
        <BarChart 
          title='Índices más bajos de Aforo/Población por ABEG' 
          typeOfValue='Aforo/Población' 
          labels={aforo_poblacion_data_menores.map((item) => item.ABEG)} 
          data_to_show={aforo_poblacion_data_menores.map((item) => item.indice)}
          xLabel='ABEG'
          yLabel='Aforo/Población'
          color='#d11a1a'
        />
        <BarChart 
          title='Índices más altos de Aforo/Población por ABEG' 
          typeOfValue='Aforo/Población' 
          labels={aforo_poblacion_data_mayores.map((item) => item.ABEG)} 
          data_to_show={aforo_poblacion_data_mayores.map((item) => item.indice)}
          xLabel='ABEG'
          yLabel='Aforo/Población'
          color='#59af31'
        />
        <ABEGList list={[{}]} title="ABEG sin AFORO" color='text-red-700' />
        <ABEGList list={[{}]} title="Todos los ABEG" color='text-primary' />
      </div>
    </>
  )
}

export default Dashboard
