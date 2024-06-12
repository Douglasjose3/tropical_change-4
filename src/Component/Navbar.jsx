import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll"
import { AiFillDiscord } from "react-icons/ai"
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
        const [click, Setclick] = useState(false);
        const handleClick = () => Setclick(!click);
            useEffect(() => {
                Aos.init();
            })
        const content = <>
            <div className='lg:hidden md:hidden block absolute top-[96px] min-h-screen min-w-full left-0 rigth-0 p-7 backdrop-blur-white transition backdrop-blur-lg'>
                <ul className="text-center text-xl">
                    <Link spy={true} smooth={true} to='about'><li className="linkMenu">About</li></Link>
                    <Link spy={true} smooth={true} to='whats'><li className="linkMenu">What's Included</li></Link>
                    <div className='flex justify-center animate-pulse'>
                        <button className="flex items-center border-2 px-4 py-4 rounded-xl mt-8 bg-blueMedium text-white shadow-lg uppercase font-bold hover:bg-orangeLight hover:text-orangeDark hover:border-orangeDark"
                            type="button">
                                <p className="text-[30px] mr-3">
                                    <AiFillDiscord/>
                                </p>            
                            <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
                        </button>
                    </div>
                </ul>
            </div>
        </>
    
    return (
        <nav className="sticky top-0 z-50 z-index">
            <div className="flex justify-between py-3 px-[60px] pt-8 shadow-2xl bg-orangeDark">
                <div className="flex items-center flex-1">
                    <a href="/" id='home' className="text-white font-extrabold lg:text-[36px] text-nowrap hover:sm: text-[24px] hover:sm: p-[8px]">Tropical Change</a>
                </div>
                <div className="">
                    <ul className="lg:flex items-center gap-8 text-[18px] font-bold text-orangeLight text-nowrap hover:sm: hidden">
                        <Link spy={true} smooth={true} to='about'><li className="hover:text-white transition cursor-pointer">About</li></Link>
                        <Link spy={true} smooth={true} to='whats'><li className="hover:text-white transition cursor-pointer">What's Included</li></Link>
                        <div className='flex animate-pulse'>
                            <button className="flex items-center text-nowrap border-2 px-4 py-4 rounded-xl uppercase ml-5 shadow-xl bg-blueMedium text-white hover:bg-orangeLight hover:text-orangeDark"
                                type="button">
                                    <p className="text-[30px] mr-3">
                                        <AiFillDiscord/>
                                    </p>            
                                <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
                            </button>
                        </div>
                    </ul>
                </div>
                <div>
                    {click && content}
                </div>

                <div>
                    <button className="block font-extrabold text-white sm:hidden transition justify-center pt-[20px]" onClick={handleClick}>
                        {click ? <FaTimes/> : <CiMenuFries/>}
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;