import React from "react";
import logo from '../assets/gitfolio 1 (1).svg'
const Navbar = () => {
  return (
    <header className="flex items-center justify-center py-6 bg-black">
        <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-500 px-6 py-4 rounded-full text-white text-sm ">

        <div className="flex items-center hover:cursor-pointer ">
            <img className="" src={logo} alt="logo" />
            <span className="text-3xl font-bold ">GitFolio</span>
        </div>
        

        <div className="hidden ml-54 md:flex items-center gap-4 ">

            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                Contact 
            </button>
            <button className="bg-purple-600 text-white hover:shadow-[0px_0px_10px_4px] shadow-[0px_0px_10px_2px] 
            hover:shadow-white/50 shadow-white/50 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 hover:text-black transition duration-300 ">
                Get Started
            </button>
        </div>


    </nav>
    </header>
    
  );
};

export default Navbar;
