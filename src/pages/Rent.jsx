// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import HeroTextSlider from "../reusables/HeroTextSlider";
import carbg from '../assets/car-bg.jpg'
import SvgDesignBottom from "../reusables/SvgDesignBottom";
import herocar from '../assets/car-home-hero.png'
import LowerPrice from "../reusables/LowerPrice";
import MobileHeroText from "../reusables/MobileHeroText";

const Rent = () => {
  return (
    <div>
      <div>
        <h1>Rent</h1>
      </div>

      <div>
      
      <div className="Hero relative top-0 lg:top-[-5rem] sm:h-[10rem] md:h-[51rem] bg-cover" style={{ backgroundImage: `url(${carbg})` }}>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/85"></div> {/* Black overlay with opacity */}
          
        <HeroTextSlider />
        <MobileHeroText />

        {/* <div className="herocar absolute w-[80%] left-[50%] mt-2rem md:w-[40%] md:left-[78%] md:mt-[12rem] transform -translate-x-1/2 z-10">
          <img src={herocar} alt="" />
        </div> */}

        
        <div className="relative top-[15%]">
          <SvgDesignBottom />
        </div>
      </div>
      
    {/* <div className="service w-4/5 md:w-[70%] m-auto text-center">

    </div> */}
        <div>
          {/* <select >
              <label>6 Products</label>
              <li>16 Products</li>
              <li>32 Products</li>
              <li>48 Products</li>
              <li>64 Products</li>
              <li>128 Products</li>
          </select> */}

          <h1></h1>
        </div>


      <LowerPrice />
    </div>

    </div>
  )
}

export default Rent



// const Home = () => {
//   return (
    
//   )
// }

// export default Home