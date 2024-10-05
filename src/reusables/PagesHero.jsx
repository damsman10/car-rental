import Breadcrumb from "./Breadcrumb";
import carbg from '../assets/car-bg-header.jpg';

const PagesHero = () => {
  return (
    <div className='relative w-full h-[18rem] md:h-[24rem] mt-[-5rem] bg-cover bg-center' style={{backgroundImage: `url(${carbg})`}}>
      
     
      <div className="overlay absolute inset-0 bg-black opacity-70"></div> 

      <h1 className='relative flex justify-center top-[65%] text-white z-10'>
        <Breadcrumb />
      </h1>
    </div>
  );
}

export default PagesHero;
