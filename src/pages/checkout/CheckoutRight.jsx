import CheckoutTextBox from "../../reusables/checkoutreuseable/CheckoutTextBox";

export const CheckoutRight = () => {
  return (
    <div className="orderSummary text-[#0d0d0d] w-[100%] ">
      <h1 className="bg-[#1c1601] text-[#ffca06] font-bold sm:text[1rem] md:text-[1.3rem] h-[9vh]  flex items-center justify-center  rounded-full  px-[2rem] ">
        Your order
      </h1>
      <table className="border-collapse rounded-[15px] border-2 border-[#f6f6f6] w-full md:w-[85%] my-[1rem] m-auto ">
        <thead>
          <tr className="bg-[#f4f4f4] border-[#e4e4e4]">
            <th className="border px-6 py-[1.1rem]  border-[#ebebeb] text-left text-[1.1rem] font-bold">
              Product
            </th>
            <th className="border px-6 py-[1.1rem]  border-[#ebebeb] text-left text-[1.1rem] font-bold">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#fcfcfc]">
          <tr>
            <td className="border  border-[#ebebeb] px-6 py-4">Car 4x1</td>
            <td className="border  border-[#ebebeb] px-6 py-4">402</td>
          </tr>
          <tr>
            <td className="border  border-[#ebebeb] px-6 py-4">Car 4x1</td>
            <td className="border  border-[#ebebeb] px-6 py-4">402</td>
          </tr>
        </tbody>
        <tfoot className="bg-[#fcfcfc]">
          <tr>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left text-[1.1rem] font-bold">
              Subtotal
            </th>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left font-bold">
              402
            </th>
          </tr>
          <tr>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left text-[1.1rem] font-bold">
              Total
            </th>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left text-[1.1rem] font-bold">
              402
            </th>
          </tr>
        </tfoot>
      </table>
    <div className="bg-[#fcfcfc] border border-[#ebebeb] md:w-[85%] m-auto xs:py-[2rem] xs:pt-[4rem] md:py-[2rem]">
       <div className="w-full px-[7%]">
       <CheckoutTextBox text="Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements." />
        
       </div>
       <hr className="h-3  mx-3 mb-[1rem] xs:mt-[3rem] md:mt-[4rem] " />
        <div className="w-[90%] m-auto">
          <button className="px-8 h-12 w-full font-bold rounded-3xl text-black text-[1.1rem] p-3  bg-[#FFCA08]">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};
