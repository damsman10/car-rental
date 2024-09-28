import SvgDesignTop from "../reusables/SvgDesignTop"
import footercar from '../assets/car-footer.png'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import NeedACar from "../reusables/NeedACar";
import Footerbrand from "../reusables/Footerbrand";

const Footer = () => {
  return (
    <div className="mt-[10rem]">
        <div className="svgtop relative">
            <SvgDesignTop />
        </div>
        
        <div className="footer relative bg-[#1c1601] flex flex-col gap-8 pb-10">
            <div className="top relative flex flex-col md:flex-row items-center justify-start gap-10 md:gap-[6rem]">

            
                <div className="left ">
                    <div className="footercar 2xl:ml-20 -mt-16">
                        <img src={footercar} alt="" style={{width: "40rem"}}/>
                    </div>
                </div>

                <div className="right socials flex justify-center items-center gap-3 md:gap-6 flex-wrap md:flex-nowrap">
                    <a href="#">
                        <div className="facebook-icon bg-white hover:bg-[#FFCA08] h-12 w-12 md:h-16 md:w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                        <FaFacebookF className="h-5 w-5 md:h-6 md:w-6 text-black" /> 
                        </div>
                    </a>
                    
                    <a href="#">
                        <div className="twitter-icon bg-white hover:bg-[#FFCA08] h-12 w-12 md:h-16 md:w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                            <FaTwitter className="h-5 w-5 md:h-6 md:w-6 text-black" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="whatsapp-icon bg-white hover:bg-[#FFCA08] h-12 w-12 md:h-16 md:w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                            <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6 text-black" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="instagram-icon bg-white hover:bg-[#FFCA08] h-12 w-12 md:h-16 md:w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                            <FaInstagram className="h-5 w-5 md:h-6 md:w-6 text-black" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="middle Needacar relative ">
                <NeedACar />
            </div>

            <div className="bottom relative">
                <Footerbrand />
            </div>
        </div>
    </div>
  )
}

export default Footer