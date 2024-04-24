import React from 'react'
import { Link } from 'react-router-dom'

export const CountryCard = ({ country }) => {

    // console.log(country)
    const { name, flags, population, region, capital } = country

    return (
        <div key={country.cca3} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link to={`/${name.common}`}>
                {/* <img src={flags.png} alt={name.common} className="w-full h-56 object-cover object-center" /> */}
                <img src={country.flags.png} alt={country.name.common} className="w-full h-56 object-cover object-center" />
                <div className="p-4">
                    <h1 className="font-NunitoSans font-bold text-xl mb-2">{name.common}</h1>
                    <p className="font-NunitoSans text-sm"><span className="font-semibold">Population:</span> {population}</p>
                    <p className="font-NunitoSans text-sm"><span className="font-semibold">Region:</span> {region}</p>
                    <p className="font-NunitoSans text-sm"><span className="font-semibold">Capital:</span> {capital}</p>
                </div>
            </Link>
        </div>
        // <></>
    )
}
