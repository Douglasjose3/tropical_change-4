import { AiFillDiscord } from "react-icons/ai";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div id="about" className="bg-about bg-cover bg-fixed min-w-screen min-h-screen flex justify-center items-center hover:sm: bg-right">
                <div className="">
                        <div className="leading-[50px]">
                            <div className="textH1 pb-8 hover:sm: text-[55px]">
                                <h1 className="" data-aos = 'fade-right'>Tropical Change</h1>
                            </div>
                            <div className="aboutP ">
                                <p>"We want to make a difference in the Day Trading Community, by removing stress and adding confidence to your trades".</p>
                                <p>We do not intend to sell anything. We are a group of traders who like to share how we navigate the market.</p>
                            </div>
                            <div className='flex justify-center animate-pulse'>
                                <button className="aboutButton"
                                    type="button">
                                    <p className="text-[30px] mr-3">
                                        <AiFillDiscord/>
                                    </p>            
                                    <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
} 

export default About;