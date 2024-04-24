import React from 'react'
import { ThemeContext } from './Theme'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaRegSun } from 'react-icons/fa'


export const Toggle = () => {

    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div className="flex items-center">

            {theme === 'dark' ? (
                <button className="focus:outline-none" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <FaRegSun className="w-6 h-6 text-yellow-500" />
                </button>
            ) : (
                <button className="focus:outline-none" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <HiOutlineMoon className="w-6 h-6 text-yellow-500" />
                </button>
            )

            }
        </div >




    )
}
