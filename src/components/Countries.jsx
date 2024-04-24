import { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import { CountryCard } from './CountryCard'

const Countries = () => {

    const url = 'https://restcountries.com/v3.1/all'
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])
    const [region, setRegion] = useState('')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setFilteredCountries(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    const regionHandler = (e) => {
        setRegion(e.target.value)
    }

    useEffect(() => {
        const filtered = countries.filter((country) => (!search || country.name.common.toLowerCase().includes(search.toLowerCase())) && (!region || country.region === region));
        setFilteredCountries(filtered)
    }, [search, region, countries])

    return (
        <>
            <div className="px-6 py-12 md:px-20 md:py-12 min-h-screen bg-lightModeBackground dark:bg-darkModeBackground transition-all shadow-inner">
                <div className="flex-col flex gap-y-12 md:gap-x-10 md:flex-row md:justify-between mb-12">
                    <Search value={search} searchHandler={searchHandler} />
                    <Filter value={search} regionHandler={regionHandler} />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-20 gap-y-16 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">

                    {loading ? (
                        <h1 className="text-3xl font-bold text-center">
                            Loading...
                        </h1>
                    ) : (

                        filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <CountryCard key={country.cca3} country={country} />
                            ))
                        ) : (
                            <h1 className="text-3xl font-bold text-center">
                                No countries found
                            </h1>
                        )

                    )}
                </div>

            </div >
        </>
    )

}

export default Countries