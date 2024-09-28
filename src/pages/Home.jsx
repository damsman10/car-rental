import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroTextSlider from "../reusables/HeroTextSlider";
import carbg from '../assets/car-bg.jpg'
import Service from "../reusables/Service";
import Benefits from "../reusables/Benefits";
import SvgDesignBottom from "../reusables/SvgDesignBottom";
import herocar from '../assets/car-home-hero.png'
import LowerPrice from "../reusables/LowerPrice";
import MobileHeroText from "../reusables/MobileHeroText";
import CarRental from "../reusables/CarRental";

const Home = () => {
  return (
    <div>
      
      <div className="Hero relative top-0 md:top-[-6rem] sm:h-[10rem] md:h-[105vh] lg:h-[115vh] 2xl:h-[120vh] bg-cover" style={{ backgroundImage: `url(${carbg})` }}>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/85"></div> {/* Black overlay with opacity */}
          
        <HeroTextSlider />
        <MobileHeroText />

        <div className="herocar absolute w-[80%] left-[50%] mt-2rem md:w-[40%] md:left-[78%] md:mt-[12rem] transform -translate-x-1/2 z-10">
          <img src={herocar} alt="" />
        </div>

        <div className="relative block 2xl:hidden top-[22%]">
          <SvgDesignBottom />
        </div>
        {/* <div className="belowSvgBottom hidden lg:block mt-[10%] h-[8rem] w-full bg-white">

        </div> */}
      </div>
      
    <div className="service relative w-4/5 md:w-[70%] m-auto text-center lg:mt-[4rem]">

      <Service 
      title = "Why should you book with us?"
      titlebg = "#F1F1F1"
      service = "We compare car rental prices,"
      span = "you save!"
      color = "black"
      />
    </div>

      
      <Benefits />

      <LowerPrice />

      <CarRental />
    </div>
  )
}

export default Home