import SvgDesignPricingT from "./SvgDesignPricingT"
import SvgDesignPricingB from "./SvgDesignPricingB"
import pricescar from '../assets/prices-car.png'
import pricescarb from '../assets/car-pricing-bottom.png'
import PricePlan from "./PricePlan"
import ServicePricing from "./ServicePricing"
import PricePlanSmall from "./PricePlanSmall"

const LowerPrice = () => {
  return (
    <div className="mt-[10rem]">
        <div className="pricescar absolute w-[40%] mt-[6%]">
            <img src={pricescar} alt="" />
        </div>
        <SvgDesignPricingT />
        
        <div className="content px-[8%] w-full py-[8rem] bg-[#1C1601] flex justify-between">
            <div className="left w-3/6">
                <ServicePricing />
            </div>

            <div className="price-plan flex items-center justify-center">
                <PricePlan />
                <PricePlanSmall />
            </div>
        </div>

        <SvgDesignPricingB />
        <div className="car-pri-b absolute w-[40%] -mt-[30%] ml-[58%]">
            <img src={pricescarb} alt="" />
        </div>
    </div>
  )
}

export default LowerPrice