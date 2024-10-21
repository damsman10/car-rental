import React from 'react'
import car1 from "../assets/car-1.png";
import cartIcon from "../assets/cart-icon.png";
import p2 from "../assets/p-2.png";
import { useState } from 'react';

const ProductCard = ({percent, discount, price, carpic, type}) => {
  const [isThereDiscount, setIsThereDiscount] = useState(false);
    const toggleDiscount = () => {
      setIsThereDiscount(!isThereDiscount)
    }
  
  return (
    <div className="relative w-[40%] mb-[1rem]">
      {type==="discount" && (
        <div className="flex border rounded-xl w-[100%] justify-center flex-col bg-black ">
        <div className="flex justify-between left-[-1rem] absolute sm:top-[-1rem] top-[-1.5rem] sm:w-[110%] w-[120%] h-[8vh] items-center font-bold">
          <span className="bg-yellow-400 inner sm:p-[1rem] px-[0.8rem] rounded-[50%] flex items-center justify-center sm:h-auto h-full ">{percent}</span>
          <span className="bg-yellow-400 inner p-[1rem] rounded-r-full rounded-l-full flex items-center justify-center font-bold sm:h-auto h-[1rem]">
            <s className="opacity-[50%] text-xs mr-[0.3rem]">{discount}</s> 
            {price}
          </span>
        </div>
        <div className="">
          <img src={carpic} alt="car-pic" className="w-[97%] rounded-t-lg m-auto self-center sm:my-[8px] my-[2px]"/>
        </div>
        <button className="flex justify-center items-center sm:py-[1.5rem] py-[0.5rem] rounded-b-lg hover:bg-yellow-400 hover:text-black text-yellow-400 sm:font-semibold ">
          <img src={cartIcon} alt="cart-icon" className="sm:w-[30px] w-[15px] mr-[5px] fill-yellow-400 " />
          Add to Cart
        </button>
        
      </div>
      )}
      {type!=="discount" && (
        <div className="flex border rounded-xl w-[100%] justify-center flex-col bg-black ">
        <div className="flex justify-end absolute sm:top-[-1rem] top-[-1.5rem] sm:w-[105%] w-[120%] h-[8vh] items-center font-bold ">
          <span className="bg-yellow-400 inner p-[1rem] rounded-r-full rounded-l-full flex items-center font-bold sm:h-auto h-[1rem] flex-end text-lg">
            {price}
          </span>
        </div>
        <div className="">
          <img src={carpic} alt="car-pic" className="w-[97%] rounded-t-lg m-auto self-center sm:my-[8px] my-[2px]"/>
        </div>
        <button className="flex justify-center items-center sm:py-[1.5rem] py-[0.5rem] rounded-b-lg hover:bg-yellow-400 hover:text-black text-yellow-400 sm:font-semibold ">
          <img src={cartIcon} alt="cart-icon" className="sm:w-[30px] w-[15px] mr-[5px] fill-yellow-400 " />
          Add to Cart
        </button>
        
      </div>
      )}
    </div>
  )
}

export default ProductCard
// import React from 'react'

// const ProductCard = ({ image, pic, price, amount, discount, label}) => {
//   return (
//     <div className="frame m-auto w-[20.5rem] h-[20rem] sm:text-center text-center sm:text-left md:w-[17.8rem] sm:h-[17.8rem] bg-black shadow-[0_0_0_5px_#000000] rounded-[4%] grid-rows-3 hover:shadow-[0_0_0_8px_#FFCA08] transition-shadow duration-300 ">
//       <div 
//         className="frame m-auto mt-20 w-[20rem] h-[15.5rem] sm:w-[17.8rem] sm:h-[17.8rem] rounded-[5%] shadow-[0_0_0_4px_#000000] " 
//         style={{
//             backgroundImage: `url(${image})`,
//             backgroundSize: 'cover',
//             // backgroundPosition: 'center',
//         }}>
//         <div className="inner relative top-[-5%] left-[92%] w-20 h-6 md:w-20 sm:h-24 rounded-[0%] flex items-center justify-center bg-yellow-400 ">
//         <div className="bg-yellow-400 flex justify-center px-6 r-16 text-center justify-center space-x-3 h-14 text-black rounded-xl pt-3">
//         <p className="text-black text-xl font-semibold"><s>{price}</s></p>
//         <p className="text-black text-xl font-semibold ">{amount}</p>
//         </div>
//          </div>
//          <div className="inner relative top-[-4rem] left-[-7%] w-16 h-16 md:w-24 md:h-24 rounded-[50%] flex items-center justify-center bg-yellow-400">
//            <p className="text-black text-xl font-semibold">$25{discount}</p>
//          </div>
//       </div>
//         {/* <img src={pic} alt='Product Picture'/> */}
        
        
//         <div className=" border bg-yellow-400 flex justify-center justify-align rounded-xl space-x-3  hover:bg-[0_0_0_8px_#0000] transition-shadow duration-300">
//           <div className=" py-6"><img src={pic} alt="" className="w-5 space-x-9 h-26 flex " /></div>
//         <p className="text-white space-x-9 h-26 py-6">Add to Cart</p>
//         </div>
        
        

//     </div>
//   )
// }

// export default ProductCard


// // const Benefit = ({ image, pic, text }) => {
// //   return (
// //     <div>
// //       <div 
// //           className="frame m-auto mt-20 w-[12rem] h-[12rem] md:w-[17.8rem] md:h-[17.8rem] rounded-[50%] hover:shadow-[0_0_0_8px_#FFCA08] transition-shadow duration-300" 
// //           style={{
// //               backgroundImage: `url(${image})`,
// //               backgroundSize: 'cover',
// //               backgroundPosition: 'center',
// //           }}
// //       >
// //         <div className="inner relative top-[9.7rem] left-[35%] w-16 h-16 md:w-24 md:h-24 rounded-[50%] bg-[#FFCA08] flex items-center justify-center">
// //           <img src={pic} alt="" className="w-10" />
// //         </div>
        
// //       </div>

// //       <p className="font-bold mt-14 text-[1.5rem] italic text-center">{text}</p>
// //     </div>
// //   );
// // }

// // export default Benefit;
