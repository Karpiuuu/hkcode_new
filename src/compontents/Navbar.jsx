import React, {useState, useEffect} from 'react'
import classNames from "classnames";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import 'animate.css/animate.min.css';


import Logo from '../assets/logo.svg'

  const Navbar = () => {
    const [nav, setNav] = useState(false)

      const handleNav = () => {
          setNav(!nav)
      }
      const [hoveredIndex, setHoveredIndex] = useState(null);

      const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };

      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };

      const handleTouchStart = (index) => {
        setHoveredIndex(index);
      };

      const handleTouchEnd = () => {
        setHoveredIndex(null);
      };

    const lista = ["O nas", "Oferta", "Portfolio", "Opinie"];

    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollDown = currentScrollPos > 0;
        setScrollDown(isScrollDown);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className={classNames('w-full md:sticky md:top-0 z-[999]', 
      {
        "bg-transparent": !scrollDown,
        "bg-[#BA78D9] shadow-lg": scrollDown,
      }
      )}>
        <div className='flex items-center h-24 max-w-[1240px] mx-auto text-white'>
          <div className='w-[20%]'>
            <img className="h-[60px]" src={Logo} alt="" />
          </div>
          <div className='w-full'>
            <div className='hidden md:flex mx-auto glass w-[60%] h-[60px]'>
              <ul className='hidden md:flex mx-auto py-0 items-center gap-[40px]'>
                {lista.map((element, index) => (
                <li
                key={index}
                className={`flex justify-between items-center px-4 cursor-pointer text-[18px] h-[45px] ${index === hoveredIndex ? 'glass' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
                >
                {element}
                </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className='w-[20%] flex justify-end'>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500 z-[999]' : 'fixed left-[-100%]'}>
                <img className="h-[100px] mx-5 my-10" src={Logo} alt="" />
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600 hover:scale-105 duration-300'>Strona Główna</li>
                    <li className='p-4 border-b border-gray-600 hover:scale-105 duration-300'>O nas</li>
                    <li className='p-4 border-b border-gray-600 hover:scale-105 duration-300'>Usługi</li>
                    <li className='p-4 border-b border-gray-600 hover:scale-105 duration-300'>Kontakt</li>
                    
                </ul>
                <div className='p-4'>
                <button className='bg-[#131E32] text-white px-10 py-3 hover:scale-105 duration-300'><a href="tel://+48510509403">Zadzwoń do nas!</a></button>
                </div>
                
                
                
            </div>
            <button className='hidden md:flex hover:scale-105 duration-300 bg-white text-black text-[18px] rounded-full w-[136px] h-[42px] items-center justify-center'><a href="tel://+48510509403">Kontakt</a></button>
          </div>
          
      </div>
      </div>
    );
}

export default Navbar