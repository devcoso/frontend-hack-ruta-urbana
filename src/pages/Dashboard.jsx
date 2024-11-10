
import BarChart from '../components/BarChart'
import AGEBList from '../components/AGEBList'
import { getData } from '../data/getData'

function Dashboard() {

  const {
    aforo_poblacion_data_menores,
    aforo_poblacion_data_mayores,
    poblacion_data
  } = getData()

  return (
    <>
      <h1 className='text-primary text-4xl font-bold text-center my-5'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 m-auto gap-2'>
        <BarChart 
          title='Índices más bajos de Aforo/Población por AGEB' 
          typeOfValue='Aforo/Población' 
          labels={aforo_poblacion_data_menores.map((item) => item.AGEB)} 
          data_to_show={aforo_poblacion_data_menores.map((item) => item.INDICE)}
          xLabel='AGEB'
          yLabel='Aforo/Población'
          color='#d11a1a'
        />
        <BarChart 
          title='Índices más altos de Aforo/Población por AGEB' 
          typeOfValue='Aforo/Población' 
          labels={aforo_poblacion_data_mayores.map((item) => item.AGEB)} 
          data_to_show={aforo_poblacion_data_mayores.map((item) => item.INDICE)}
          xLabel='AGEB'
          yLabel='Aforo/Población'
          color='#59af31'
        />
      </div>
      <div className="m-auto w-full md:w-4/5">
        <AGEBList list={poblacion_data} />
      </div>
    </>
  )
}

export default Dashboard
