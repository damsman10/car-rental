import { FaCheck } from 'react-icons/fa';

const PricePlan = () => {
  return (
    <div>
        <div className="outer h-[35rem] w-[20rem] bg-[#FFCA08] rounded-[1.5rem] flex flex-col items-center justify-start relative z-10">

            <h1 className="italic relative top-2 text-[1.3rem] font-bold mt-4">
                Weekly Pro Offer
            </h1>

            <div className="inner w-[95%] m-auto h-[85%] bg-[#1C1601] rounded-[1.5rem] relative top-[0.85rem] rounded-t-[30%]">
                <ul className="text-white relative top-16 left-16 space-y-6 italic font-medium">
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        1+ Day free car
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        1+ Day free driver
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        20% Cash back
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        Unlimited mileage
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        Lowest deposit
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        Brand new vehicles
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        Free Cancellation
                    </li>
                    <li className="flex items-center group">
                        <FaCheck className="text-[#FFCA08] mr-6 transition-transform duration-300 ease-in-out group-hover:scale-125" />
                        Premium support
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PricePlan