import { AiOutlineSearch } from 'react-icons/ai'

const Search = (result) => {

    const handleSearch = typeof result.searchHandler === 'function' ? result.searchHandler : () => { }

    return (
        <div className="flex items-center rounded-xl relative md:w-[480px] border-lightModeInput shadow-md text-lightModeText dark:text-white">
            <AiOutlineSearch className="absolute pl-4 w-10 h-10 text-lightModeInput dark:text-white" />
            <input type="text" placeholder="Search for a country..." className="pl-16 text-sm w-full h-full p-4 rounded-xl bg-white dark:bg-darkModeElements transition-all" value={result.value} onChange={handleSearch} />
        </div>

    )
}

export default Search
