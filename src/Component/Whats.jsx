import { RiLiveFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { IoBarChart } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Whats = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="whats" className="bg-cover bg-chart bg-fixed min-w-screen min-h-screen overflow-x-hidden flex justify-center items-center p-20 hover:sm: bg-center">
            <div className="">
                <div className="text-white backdrop-blur-md rounded-xl">
                    <div className="textH1white p-16 hover:sm: text-[50px]">
                        <h1 className="mb-[-30px]" data-aos = 'fade-right'>What's</h1>
                        <h1 className="" data-aos = 'fade-left'>Included</h1>
                    </div>
                    <div className="grid lg:grid-cols-5 gap-14 p-5">
                        <div className="" data-aos="zoom-in">
                            <span className="iconWhats"><RiLiveFill/></span>
                            <h1 className="whatsH1">Live Trading <br /> Sessions</h1>
                            <p className="whatsP">Experience live tape reading, real-time trade executions, and ongoing education.</p>    
                        </div>
                        <div className="backdrop-blur-sm rounded-lg" data-aos="zoom-in">
                            <span className="iconWhats"><GiBrain/></span>
                            <h1 className="whatsH1">Inclusive Mentorship Programs</h1>
                            <p className="whatsP">Master our trading and account management strategies. Gain an exclusive edge you won't find elsewhere. We guide you step by step through what made us successful.</p>
                        </div>
                        <div className="backdrop-blur-sm rounded-lg" data-aos="zoom-in">
                            <span className="iconWhats"><FaHandshake/></span>
                            <h1 className="whatsH1">Supportive <br /> Community</h1>
                            <p className="whatsP">We pride ourselves on having one of the most talented and supportive trading communities. Join the chat and trade alongside fellow traders throughout all trading sessions.</p>
                        </div>
                        <div className="backdrop-blur-sm rounded-lg" data-aos="zoom-in">
                            <span className="iconWhats"><IoBarChart/></span>
                            <h1 className="whatsH1">Detailed Chart <br /> Analysis</h1>
                            <p className="whatsP">Access our live market insights, liquidity analysis, and both pre-market and post-market charting.</p>
                        </div>
                        <div className="backdrop-blur-sm rounded-lg" data-aos="zoom-in">
                            <span className="iconWhats"><FaMoneyBillTrendUp/></span>
                            <h1 className="whatsH1">Proprietary Firm <br /> Payout Strategies</h1>
                            <p className="whatsP">We know what works and we share all our strategies with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whats;