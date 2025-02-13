
import React, { useState, useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';




export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
const [isOpen,setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// const [isOpen,setIsOpen] = useState(false);
  return <> 





    <nav className={`fixed w-full top-0 left-0 p-3 z-50 transition-all duration-300 ease-in transform ${
      isScrolled ? "bg-[#2C3E50] py-0 shadow-lg" : "bg-[#2C3E50] py-2"
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <Link to={''} className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
          <span className=" pointer-events-none   self-center text-2xl font-bold text-white uppercase" >
            Start Framework
          </span>
        </Link>
     
   <div className='block  lg:hidden'>
   <button onClick={()=>setIsOpen(!isOpen)} type="button" className="lg-hidden -m-2.5 inline-flex items-center hover:bg-gray-300 bg-gray-400 justify-center rounded-md p-2.5 text-gray-700">
      <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
   </div>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <NavLink to={'about'} className="w-20 text-center block py-2 mt-4 px-2 font-bold uppercase rounded-lg text-white md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 no-underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={'portfolio'} className="w-28 text-center block py-2 mt-4 px-3 font-bold uppercase rounded-lg text-white md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 no-underline">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={'contact'} className="w-24 text-center block py-2 mt-4 px-3 font-bold uppercase rounded-lg text-white md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 no-underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    <div className={isOpen ? "lg:hidden translate-y-0" : "hidden translate-y-full"} 
     role="dialog" 
     aria-modal="true">
  
  <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)} />
  
  <div className="fixed top-0 left-0 w-full bg-[#2C3E50] px-6 py-6 shadow-lg z-50 transition-transform duration-300 ease-in-out"
       style={{ transform: isOpen ? "translateY(0)" : "translateY(-100%)" }}>


<div className="fixed top-0 left-0 w-full z-50 bg-[#2C3E50] shadow-lg">
  <div className="mt-6">
    <ul className="font-medium flex flex-col">
      <li>
        <NavLink to={'about'} className="w-28 block py-2 mt-4 px-4 font-bold uppercase rounded-lg text-white no-underline">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={'portfolio'} className="w-28 block py-2 mt-4 px-3 font-bold uppercase rounded-lg text-white no-underline">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to={'contact'} className="w-28 block py-2 mt-4 px-3 font-bold uppercase rounded-lg text-white no-underline">
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
</div>

  </div>
</div>




    </>

  }

