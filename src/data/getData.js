import data from './data.js'

export const getData = () => {


    //Obtener aforo/población
    const aforo_poblacion_data = data.map((item) => {
        return {
            "ABEG" : item.CVE_AGEB,
            "POBTOT" : item.POBTOT,
            "AFORO" : item.AFORO,
            "indice" : item.AFORO / item.POBTOT
        }
    }).filter((item) => item.POBTOT > 0)

    //Ordenar de menor a mayor
    const aforo_poblacion_data_ordenado = aforo_poblacion_data.sort((a, b) => a.indice - b.indice)

    //Obtener los 7 primeros
    const aforo_poblacion_data_menores = aforo_poblacion_data_ordenado.slice(0, 7)

    //Obtener los 7 últimos
    const aforo_poblacion_data_mayores = aforo_poblacion_data_ordenado.slice(-7)

    return {
        aforo_poblacion_data_menores,
        aforo_poblacion_data_mayores,
    }
}   
    