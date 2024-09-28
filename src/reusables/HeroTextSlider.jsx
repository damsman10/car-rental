import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from './Button';

const HeroTextSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative hidden md:block top-4 md:top-[10rem] pt-[2rem] md:pt-[4rem] w-[85%] h-[20rem] m-auto z-0">
      <style>
        {`
          /* Force all dots to be white */
          .slick-dots li button:before {
            color: white !important;  /* Force all dots to be white */
            opacity: 0.5 !important;  /* Adjust the transparency of inactive dots */
          }

          /* Active dot */
          .slick-dots li.slick-active button:before {
            opacity: 1 !important;    /* Fully opaque for active dot */
          }
        `}
      </style>
      <Slider {...settings} className="relative z-10 text-center">
        <div>
          <h1 className="text-white pt-[2rem] text-3xl md:text-6xl font-bold mb-10">We are a Car Rental Agency</h1>
          <Button text="Discover Popular New Cars" />
        </div>
        <div>
          <p className="text-gray-500 text-[1rem] md:text-[1.2rem]">The best way of renting</p>
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-10 leading-[2.5rem] md:leading-[4.5rem]">

            Best cars to make <br /> Your <span className="text-[#FFCA08]">drive easy</span>
          </h1>
          <Button text="Best Offers" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroTextSlider;
