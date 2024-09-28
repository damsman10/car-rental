import { FaCheck } from 'react-icons/fa';

const PricePlanSmall = () => {
  return (
    <div>
        <div className="outer h-[28rem] w-[20rem] bg-white rounded-[1.5rem] flex flex-col items-center justify-start relative -left-14">

            <h1 className="italic relative top-2 text-[1.3rem] font-bold mt-4">
                Daily Car Rental
            </h1>

            <div className="inner w-[95%] m-auto h-[80%] bg-[#1C1601] rounded-[1.5rem] relative top-[0.85rem] rounded-t-[30%]">
                <ul className="text-white relative top-16 left-24 space-y-4 italic font-medium">
                    <li className="flex items-center group">
                        No free offers
                    </li>
                    <li className="flex items-center group">
                        No free driver
                    </li>
                    <li className="flex items-center group">
                        5% Cash back
                    </li>
                    <li className="flex items-center group">
                        1000 mileage
                    </li>
                    <li className="flex items-center group">
                        default deposit
                    </li>
                    <li className="flex items-center group">
                        Brand new vehicles
                    </li>
                    <li className="flex items-center group">
                        Free Cancellation
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PricePlanSmall