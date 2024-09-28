import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from '../assets/car-home-1.png';
import car2 from '../assets/car-home-2.png';
import car3 from '../assets/car-home-3.png';
import Button from './Button';

const CarRentalSlider = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative pt-[2rem] md:pt-[4rem] w-[85%] h-[20rem] m-auto z-0">
      <style>
        {`
          /* Styling for the arrows */
          .slick-prev, .slick-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.1);
            color: rgba(255, 208, 8, 1); /* Arrow color */
            border: none;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
          }

          .slick-prev {
            left: -3rem;
          }

          .slick-next {
            right: -3rem;
          }

          /* Hover effect for the arrows */
          .slick-prev:hover, .slick-next:hover {
            background-color: rgba(0, 0, 0, 0.8);
            transition: background-color 0.3s ease;
          }

          /* Arrow icons */
          .slick-prev:before, .slick-next:before {
            font-size: 1.5rem;
            color: rgba(255, 208, 8, 1); /* Changed arrow color */
          }

          /* Force all dots to be black */
          .slick-dots li button:before {
            color: black !important;  /* Force all dots to be black */
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
          <div className="car flex items-center justify-center">
            <img src={car1} alt="Car 1" className="w-[90%]" />
          </div>
          <h1 className="text-black pt-[2rem] text-2xl italic md:text-6xl mb-5">Standard SUV</h1>
          <p className="w-[38%] m-auto leading-8">A standard SUV offers flexibility, seating capacity and power for cruising around town or your next adventure.</p>
        </div>
        <div>
          <div className="car flex items-center justify-center">
            <img src={car2} alt="Car 2" className="w-[90%]" />
          </div>
          <h1 className="text-black pt-[2rem] text-2xl italic md:text-6xl mb-5">Types of vehicles</h1>
          <p className="w-[38%] m-auto leading-8">Car rental services primarily serve people who require a temporary vehicle</p>
        </div>
        <div>
          <div className="car flex items-center justify-center">
            <img src={car3} alt="Car 3" className="w-[90%]" />
          </div>
          <h1 className="text-black pt-[2rem] text-2xl italic md:text-6xl mb-5">Car hire</h1>
          <p className="w-[38%] m-auto leading-8">Alongside the basic rental of a vehicle, car rental agencies typically also offer other products such as insurance</p>
        </div>
      </Slider>

        <div className="button text-center mt-6">
            <Button text="View all available vehicles" />
        </div>

    </div>
  );
};

export default CarRentalSlider;
