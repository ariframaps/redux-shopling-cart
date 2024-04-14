import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { useState, useEffect } from "react"
// import { useCart } from "../context/CartContext"
import { useSelector } from "react-redux"

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(true)
    const activeStyle = 'block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:text-blue-700 xl:p-0 xl:dark:text-blue-500 xl:font-bold'
    const inactiveStyle = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 xl:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700'
    const localStorageTheme = JSON.parse(localStorage.getItem('shoplingDarkMode'))
    const [darkMode, setDarkMode] = useState(localStorageTheme != null ? localStorageTheme : true)

    // usecontext
    // const { cart } = useCart()
    const cart = useSelector(state => state.cartState.cartList)

    useEffect(() => {
        localStorage.setItem('shoplingDarkMode', JSON.stringify(darkMode));
        darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [darkMode])

    return (
        <header>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Shopling Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopling</span>
                    </Link>
                    <div className="flex xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse">
                        <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <svg aria-hidden="true" data-toggle-icon={darkMode ? 'sun' : 'moon'} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                {darkMode ? <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path> : <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>}
                            </svg>
                        </button>
                        <Link to='/cart' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart: {cart.length}</Link>
                        <button onClick={() => setOpenMenu(!openMenu)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${openMenu ? 'hidden' : ''}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="category/smartphones" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Smartphones</NavLink>
                            </li>
                            <li>
                                <NavLink to="category/laptops" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Laptop</NavLink>
                            </li>
                            <li>
                                <NavLink to="category/fragrances" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Fragrances</NavLink>
                            </li>
                            <li>
                                <NavLink to="category/skincare" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Skincare</NavLink>
                            </li>
                            <li>
                                <NavLink to="category/groceries" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Groceries</NavLink>
                            </li>
                            <li>
                                <NavLink to="category/home-decoration" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home-decoration</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
