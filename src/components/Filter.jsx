import { useEffect, useState } from 'react'

export const Filter = (result) => {

    const url = 'https://restcountries.com/v3.1/all'
    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const regions = [...new Set(data.map(country => country.region))]
                setRegions(regions)
            })
            .catch(err => console.log(err))
    })


    return (
        <select onChange={result.regionHandler} className="p-3 w-48 h-12 rounded-md shadow-md bg-white dark:bg-darkModeElements text-lightModeText dark:text-white" >
            <option value="">All</option>
            {
                regions.map((region, index) => (
                    <option key={index} value={region} >
                        {region}
                    </option>
                ))
            }
        </select >
    )
}

export default Filter
