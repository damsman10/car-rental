import Button from "./Button";


const ServicePricing = (props) => {
    return (
      <div className="flex items-center md:items-start justify-center flex-col font-light">
        <p className="py-2 w-full text-center md:text-left md:w-[80%] px-3 md:px-12 rounded-3xl text-[0.9rem] md:text-[1.4rem] italic mb-8" style={{backgroundColor: `${props.titlebg}`, color: `${props.titlecolor}`}}>{props.title}</p>
        <p
          className="italic text-[1.2rem] md:text-[2.7rem] font-bold text-center md:text-left"
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{
            __html: `Find the perfect <br /> rental car for <span class="text-[#FFCA08] underline font-bold">your trip</span>`,
          }}
        />

        <p className='text-[#a3a198] text-[1.05rem] font-normal italic mt-10 w-full md:w-[70%] leading-8 mb-12 md:text-left text-center'>Car Rental is a leader in online car rental reservations; we compare car rental deals from many companies so that you can choose which is best for your trip.</p>

        <Button 
        text = "Check out cars"
        size = "1rem"
        style = "normal"
        />
      </div>
    );
  };

export default ServicePricing