
export const getData = async() => {
    //Fetch a la API
    try {
        const response = await fetch('https://160l8aj9s4.execute-api.us-west-2.amazonaws.com/prod/hack-aty/request-data')
        const data = await response.json()

        //Obtener aforo/población
        const ageb_list = data.ageb_list.map((item) => {
            return {
                "AGEB" : item.CVE_AGEB,
                "POBTOT" : item.POBTOT,
                "AFORO" : item.AFORO,
                "INDICE" : item.AFORO / item.POBTOT,
                "gradoMarginacion" : item.gradoMarginacion
            }
        }).filter((item) => item.POBTOT > 0)
        //Quitar duplicados
        .filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.AGEB === item.AGEB
            ))
        )
        
        //Ordenar de menor a mayor
        const aforo_poblacion_data_ordenado = ageb_list.sort((a, b) => a.INDICE - b.INDICE)
        //Obtener los 7 primeros
        const aforo_poblacion_data_menores = aforo_poblacion_data_ordenado.slice(0, 7)
        //Obtener los 7 últimos
        const aforo_poblacion_data_mayores = aforo_poblacion_data_ordenado.slice(-7)
        return {
            aforo_poblacion_data_menores,
            aforo_poblacion_data_mayores,
            ageb_list
        }
    } catch (error) {  
        console.log(error)
        return null
    }
}   
    