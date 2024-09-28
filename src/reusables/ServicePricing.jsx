import Button from "./Button";


const ServicePricing = (props) => {
    return (
      <div className="flex justify-center flex-col font-light">
        <p className="py-2 w-[60%] px-3 md:px-12 rounded-3xl text-[0.7rem] md:text-[1.3rem] italic mb-8" style={{backgroundColor: "#221B01", color: "#cecece"}}>Why are our prices lower?</p>
        <p
          className="italic text-[1.2rem] md:text-[2.7rem] font-bold"
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{
            __html: `Find the perfect <br /> rental car for <span class="text-[#FFCA08] underline font-bold">your trip</span>`,
          }}
        />

        <p className='text-[#a3a198] text-[1.05rem] font-normal italic mt-10 w-[70%] leading-8 mb-12'>Car Rental is a leader in online car rental reservations; we compare car rental deals from many companies so that you can choose which is best for your trip.</p>

        <Button 
        text = "Check out cars"
        size = "1rem"
        style = "normal"
        />
      </div>
    );
  };

export default ServicePricing