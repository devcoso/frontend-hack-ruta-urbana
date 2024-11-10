import React, { useEffect, useState } from 'react'

function ABEGList({list}) {
    const [listABEG, setData] = useState(list)
    const [search, setSearch] = useState("")

    const searchABEG = (value) => {
        if (value === "") {
            setData(list)
            return
        }
        const newList = list.filter((item) => {
            // Expresion regular para buscar por ABEG
            const expresion = new RegExp("\\b" + search, "i");
            if (item.ABEG.search(expresion) != -1){
                return item;
            }
            return null;
        })
        setData(newList)
    }

    useEffect(() => {
        searchABEG(search)
    }, [search])

  return (
    <div className="h-72 bg-white shadow-lg">
        <div className="w-11/12 h-1/6 flex mx-2 gap-2">  
          <h1 className="text-center py-2 text-primary font-bold text-2xl md:text-3xl w-3/4">ABEG'S</h1>
            <input
                type="text"
                placeholder="Buscar ABEG"
                className="border-2 border-gray-200 rounded-lg m-auto w-1/4"
                onChange={(e) => setSearch(e.target.value)}  
            />
        </div>
        <div className="h-5/6 overflow-y-auto w-11/12 m-auto">
          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                            {Object.keys(list[0]).map((item) => (
                                <th scope="col" className="px-6 py-3" key={item}>
                                    {item}
                                </th>
                            ))}
                      </tr>
                  </thead>
                  <tbody>
                    {listABEG.length > 0 ? listABEG.map((item) => (
                        <tr key={item.ABEG}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.ABEG}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.POBTOT}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.AFORO}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.INDICE}
                            </td>
                        </tr>
                    )) : <tr><td colSpan="4" className="text-center">No hay datos</td></tr>}
                  </tbody>
              </table>
          </div>
        </div>
    </div>
  )
}

export default ABEGList
