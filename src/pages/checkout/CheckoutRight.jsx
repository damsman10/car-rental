import Button from '../../reusables/Button'

export const CheckoutRight = () => {
  return (
    <div className="orderSummary text-[#0d0d0d] w-[43%]">
      <h1 className="bg-[#1c1601] text-[#ffca06] font-bold text-[1.3rem] w-auto h-[9vh] rounded-full flex items-center px-[2rem] ">
        Your order
      </h1>
      <table className="border-collapse rounded-[15px] border-2 border-[#f6f6f6] w-[35vw] my-[1rem] m-auto ">
        <thead>
          <tr className="bg-[#f4f4f4] border-[#e4e4e4]" >
            <th className="border px-6 py-[1.1rem] border-[#ebebeb] text-left text-[1.1rem] font-bold">Product</th>
            <th className="border px-6 py-[1.1rem] border-[#ebebeb] text-left text-[1.1rem] font-bold">Subtotal</th>
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
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left text-[1.1rem] font-bold">Subtotal</th>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left font-bold">402</th>
          </tr>
          <tr>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left text-[1.1rem] font-bold">Total</th>
            <th className="border  border-[#ebebeb] px-6 py-[1.2rem] text-left text-[1.1rem] font-bold">402</th>
          </tr>
        </tfoot>
      </table>
      <div className="bg-[#fcfcfc] border border-[#ebebeb] p-[2rem] w-[35vw] m-auto">
          <p className="bg-[#f4f4f4]  text-[1.1rem] leading-[2.5rem] font-bold px-[3.2rem] py-[2rem]">Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</p>
          <hr className="h-3 w-full mb-[1rem] mt-[4rem] "/>
           <button className='px-8 h-12 w-full font-bold rounded-3xl text-black text-[1.1rem] p-3  bg-[#FFCA08]'>Place order</button>
        </div>
    </div>
  );
};