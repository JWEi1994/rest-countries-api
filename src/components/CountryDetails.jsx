import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const CountryDetails = () => {

    let { name } = useParams()
    console.log(name);

    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0])
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [name])

    return (

        <div className="px-6 py-12 md:px-20 md:py-12 min-h-screen bg-lightModeBackground dark:bg-darkModeBackground transition-all shadow-inner">
            <button onClick={() => navigate(-1)} className="mb-10 text-lg font-NunitoSans font-semibold text-lightModeText dark:text-white">Back</button>
            {loading ? (
                <h1 className="text-3xl font-bold text-center">
                    Loading...
                </h1>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    <img src={country.flags.png} alt={country.name.common} className="w-full h-full object-cover object-center" />
                    <div>
                        <h1 className="font-NunitoSans font-bold text-2xl mb-2">{country.name.common}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Native Name:</span> {country.name.common}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Population:</span> {country.population}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Region:</span> {country.region}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Capital:</span> {country.capital}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Top Level Domain:</span> {country.tld}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Currencies:</span> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
                            <p className="font-NunitoSans text-base"><span className="font-semibold">Languages:</span> {Object.values(country.languages).map(language => language).join(', ')}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CountryDetails
