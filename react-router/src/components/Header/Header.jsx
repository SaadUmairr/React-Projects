import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="flex items-center ">
                <div className="LogoContainer w-1/5   rounded px-2 py-4">
                    <Link to="/" className="flex items-center">
                        <img src="src/assets/logo.png" alt="LOGO" width={40} />
                        <span className="mx-2">Trip Maker</span>
                    </Link>
                </div>
                <div className="linkToPages mx-2   justify-between px-2 py-4 w-3/5">
                    <ul className="flex mx-2 justify-evenly ">
                        <li className="mx-5" >
                            <NavLink to='/' className={({isActive})=> `block duration-300 ${isActive ? "text-blue-600 text-xl" : "text-black"} `}>HOME</NavLink>
                        </li>
                        <li className="mx-5">
                            <NavLink to='/contact' className={({isActive})=> `block duration-300 ${isActive ? "text-blue-600 text-xl" : "text-black"} `}>CONTACT US</NavLink>
                        </li>
                        <li className="mx-5">
                            <NavLink to='/about' className={({isActive})=> `block duration-300 ${isActive ? "text-blue-600 text-xl" : "text-black"} `}>ABOUT US</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="LoginSignUpButton flex w-1/5 ">
                    <button className="w-20 px-1 mx-2 bg-gray-700 text-white font-bold rounded-lg ">LOG IN</button>
                    <button className="w-36 py-3 mx-1 bg-blue-700 text-white font-bold rounded-lg ">SIGN UP</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
