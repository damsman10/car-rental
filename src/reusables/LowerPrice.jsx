import SvgDesignPricingT from "./SvgDesignPricingT"
import SvgDesignPricingB from "./SvgDesignPricingB"
import pricescar from '../assets/prices-car.png'
import pricescarb from '../assets/car-pricing-bottom.png'
import PricePlan from "./PricePlan"
import ServicePricing from "./ServicePricing"
import PricePlanSmall from "./PricePlanSmall"

const LowerPrice = () => {
  return (
    <div className="mt-[5rem]">
        <div className="pricescar absolute w-[85%] md:w-[40%] mt-[6%]">
            <img src={pricescar} alt="" />
        </div>
        <SvgDesignPricingT />
        
        <div className="content px-[8%] w-full py-[8rem] bg-[#1C1601] flex flex-col lg:flex-row justify-between">
            <div className="left w-[100%] md:w-3/6">
                <ServicePricing
                titlebg = "#221B01"
                titlecolor = "#cecece"
                title = "Why are our prices lower?"
                />
            </div>

            <div className="price-plan space-y-8 flex flex-col md:flex-row items-center md:items-start lg:justify-center mt-28 md:mt-2">
                <PricePlan />
                <PricePlanSmall />
            </div>
        </div>

        <SvgDesignPricingB />
        <div className="car-pri-b absolute w-[80%] md:w-[40%] -mt-[30%] ml-[20%] md:ml-[58%]">
            <img src={pricescarb} alt="" />
        </div>
    </div>
  )
}

export default LowerPrice