import data from './data.js'

export const getData = () => {


    //Obtener aforo/población
    const poblacion_data = data.map((item) => {
        return {
            "AGEB" : item.CVE_AGEB,
            "POBTOT" : item.POBTOT,
            "AFORO" : item.AFORO,
            "INDICE" : item.AFORO / item.POBTOT
        }
    }).filter((item) => item.POBTOT > 0)
    //QUITAR DUPLICADOS
    .filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.AGEB === item.AGEB
        ))
    )

    //Ordenar de menor a mayor
    const aforo_poblacion_data_ordenado = poblacion_data.sort((a, b) => a.INDICE - b.INDICE)

    //Obtener los 7 primeros
    const aforo_poblacion_data_menores = aforo_poblacion_data_ordenado.slice(0, 7)

    //Obtener los 7 últimos
    const aforo_poblacion_data_mayores = aforo_poblacion_data_ordenado.slice(-7)

    return {
        aforo_poblacion_data_menores,
        aforo_poblacion_data_mayores,
        poblacion_data
    }
}   
    