import SvgDesignTop from "../reusables/SvgDesignTop"
import footercar from '../assets/car-footer.png'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import NeedACar from "../reusables/NeedACar";
import Footerbrand from "../reusables/Footerbrand";

const Footer = () => {
  return (
    <div>
        <div className="svgtop relative">
            <SvgDesignTop />
        </div>
        
        <div className="footer relative bg-[#1c1601] ">
            <div className="top relative flex items-center justify-start -top-52 gap-[10rem]">

            
                <div className="left ">
                    <div className="footercar 2xl:ml-20">
                        <img src={footercar} alt="" style={{width: "40rem"}}/>
                    </div>
                </div>

                <div className="right socials flex justify-center items-center gap-6">
                    <a href="#">
                        <div className="facebook-icon bg-white hover:bg-[#FFCA08] h-16 w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                        <FaFacebookF className="h-6 w-6 text-black" /> 
                        </div>
                    </a>
                    
                    <a href="#">
                        <div className="twitter-icon bg-white hover:bg-[#FFCA08] h-16 w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                            <FaTwitter className="h-6 w-6 text-black" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="whatsapp-icon bg-white hover:bg-[#FFCA08] h-16 w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                            <FaWhatsapp className="h-6 w-6 text-black" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="instagram-icon bg-white hover:bg-[#FFCA08] h-16 w-16 rounded-[50%] cursor-pointer flex items-center justify-center transition">
                            <FaInstagram className="h-6 w-6 text-black" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="middle Needacar relative -top-32">
                <NeedACar />
            </div>

            <div className="bottom relative -top-12">
                <Footerbrand />
            </div>
        </div>
    </div>
  )
}

export default Footer