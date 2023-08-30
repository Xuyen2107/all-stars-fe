import React from "react";
import style from './Header.module.scss'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className={`${style.wrapper} bg-gray-900 py-4`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">My Website</div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header