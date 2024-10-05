import React from 'react'

const ProductCard = ({ image, pic, price, amount, discount, label}) => {
  return (
    <div>
      <div 
        className="frame m-auto mt-20 w-[12rem] h-[12rem] md:w-[17.8rem] md:h-[17.8rem] rounded-[50%] hover:shadow-[0_0_0_8px_#FFCA08] transition-shadow duration-300" 
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <div className="inner relative top-[9.7rem] left-[35%] w-16 h-16 md:w-24 md:h-24 rounded-[50%] bg-[#FFCA08] flex items-center justify-center">
           <img src={label.prop} alt="" className="w-10" />
         </div>
      </div>
        <img src={pic.prop} alt='Product Picture'/>
        <p><s>${discount.prop}</s></p>
        <p>${amount.prop}</p>
        <p>${price.prop}</p>

    </div>
  )
}

export default ProductCard


// const Benefit = ({ image, pic, text }) => {
//   return (
//     <div>
//       <div 
//           className="frame m-auto mt-20 w-[12rem] h-[12rem] md:w-[17.8rem] md:h-[17.8rem] rounded-[50%] hover:shadow-[0_0_0_8px_#FFCA08] transition-shadow duration-300" 
//           style={{
//               backgroundImage: `url(${image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//           }}
//       >
//         <div className="inner relative top-[9.7rem] left-[35%] w-16 h-16 md:w-24 md:h-24 rounded-[50%] bg-[#FFCA08] flex items-center justify-center">
//           <img src={pic} alt="" className="w-10" />
//         </div>
        
//       </div>

//       <p className="font-bold mt-14 text-[1.5rem] italic text-center">{text}</p>
//     </div>
//   );
// }

// export default Benefit;
