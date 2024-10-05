import PagesHero from "../reusables/PagesHero"
import car1 from "../assets/car-1.png"
import car2 from "../assets/car-2.png"
import car3 from "../assets/car-3.png"
import car4 from "../assets/car-4.png"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";


const Cart = () => {
    const [count, setCount] =useState(1)

    const increament = () => {
      setCount(count + 1);
    };
    const decreament = () => {
      setCount(count - 1)
    }
  

  return (
    <div>
        <PagesHero />
        <div id="shopping-cart" className=" mb-20 ">
        <ul className="list-none flex items-center justify-center gap-10 mt-28 text-sm md:text-2xl border-red-400 lg:text-3xl">
        <li className=" flex items-center gap-2">
         <span className="bg-yellow-400 text-sm px-2 py-1 rounded-full">1</span> Shopping Cart
        </li> 
        <i class="ri-arrow-right-line opacity-25"></i>
        <li className=" flex items-center gap-2 opacity-25">
          <span className="bg-yellow-400 text-sm px-2 py-1 rounded-full">2</span> Checkout Details
        </li>
        <i class="ri-arrow-right-line opacity-25"></i>
        <li className=" flex items-center gap-2 opacity-25">
          <span className="bg-yellow-400 text-sm px-2 py-1 rounded-full">3</span>Order Complete
        </li>
      </ul>
      </div>
      <div></div>
        <div id="whole-table"  className=" flex flex-col items-center mb-20 justify-center">
        <table id="small-screen-tb" className="border-2 w-11/12 divide-y border-seperate lg:hidden md:hidden  divide-gray-200 border-gray-300 text-left">
        <tbody>
          <tr>
            <th id="img" className="py-5 pl-5"><img className="h-20 w-24 rounded-xl " src={car1} alt="" /></th>
            <td className="float-end"><i className="ri-close-large-fill text-red-600 text-xl"></i></td>
          </tr>
          <tr>
          <th className="px-4 py-5">Product</th>
          <td className="font-bold pl-5"><h3 className="product-name flex justify-between gap-5">Car2<br/><span  className="font-normal text-base pr-5">sku:skuy_1075</span></h3></td>
          </tr>
          <tr>
          <th className="px-4 py-5">Price</th>
          <td className="text-lg pl-5"><h4>$500</h4></td>
          </tr>
          <tr>
          <th className="  px-4 py-5">Quality</th>
          <td  className="lg:border-0 py-5 pl-5 flex items-center gap-2">
                <button onClick={decreament} className="border-0 rounded-full hover:bg-green-950 duration-300 py-2 px-4 text-center   text-xl bg-stone-200">-</button> 
                <h4 className="px-7 rounded-3xl text-xl py-2 border-2">{count}</h4>
                <button onClick={increament} className="bg-stone-200 hover:bg-green-950 duration-300 px-4 text-xl rounded-full  py-2">+</button> 
              </td>
          </tr>
          <tr>
          <th className="  px-4 py-5"></th>
          <td className=" text-lg pl-5"><h4>$500</h4></td>
          </tr>
          </tbody>
        </table>
          <table id="table" className="border-2 w-11/12 divide-y border-seperate  divide-gray-200 border-gray-300 text-left">
          <thead className="bg-stone-100 font-bold">
            <tr className=" ">
              <th className="border p-4 py-6 "></th>
              <th className="border px-4 pl-5"></th>
              <th className="border px-4 pl-5">Product</th>
              <th className="border  px-4 pl-5">Price</th>
              <th className="border px-4 pl-5">Quality</th>
              <th className="border px-4 pl-5">Subtotal</th>
            </tr>
            </thead>
            <tbody>
            <tr className="large-scrn">
              <td className="border pl-5"><i className="ri-close-large-fill text-red-600 text-xl"></i></td>
              <td id="img" className="border py-5 pl-5"><img className="h-20 w-24 rounded-xl " src={car1} alt="" /></td>
              <td className="border font-bold pl-5"><h3 className="product-name">Car2<br/><span  className="font-normal">sku:skuy</span></h3></td>
              <td className="border text-lg pl-5"><h4>$500</h4></td>
              <td  className=" py-9 border-b-2 pl-5 flex items-center gap-2">
                <button  onClick={decreament}  className="border-0 rounded-full hover:bg-green-950 duration-300 py-2 px-4 text-center   text-xl bg-stone-200">-</button> 
                <h4 className="px-7 rounded-3xl text-xl py-2 border-2">{count}</h4>
                <button onClick={increament} className="bg-stone-200 hover:bg-green-950 duration-300 px-4 text-xl rounded-full  py-2">+</button> 
              </td>
              <td className="border pl-5"><h4>$500</h4></td>
            </tr>
           
            <tr className="coupon ">
              <td className=" whitespace-nowrap p-4 "colSpan="6"> 
                <input id="apply"  placeholder="Coupon Code"  className="border-2 outline-amber-500 px-10  py-3 text-base text-gray-400 pl-3 pr-20 rounded-3xl text-left mr-1">
                </input>
                <button id="apply" className="border-2 outline-none   px-10 text-center bg-amber-400 py-3 text-base font-bold hover:bg-white hover:border-yellow-500 hover:text-yellow-500 rounded-3xl ">
                  Apply Coupon
                </button>
                <button id="shopping" className="border-2 px-10 bg-amber-400 float-right py-3 hover:border-yellow-500 hover:text-yellow-500 hover:bg-white text-base font-bold  rounded-3xl ">
                  Continue Shopping
                </button>
              
              </td>
            </tr>
            </tbody>
          </table>  
          
         </div>
         
        <div id="cart-totals" className="flex flex-col-reverse w-11/12 md:flex-row sm:justify-center items-start ml-5 justify-around mb-2">
          <div id="cart-totals" className=" border-0 w-5/6 ">
          <h2 className=" bottom-0 py-4 pl-8 w-11/12 text-left text-lg lg:text-2xl font-bold rounded-full ml-5 bg-black text-amber-400">You may be interested in ...</h2>
          <div className="flex my-10 gap-2 px-5 w-full justify-around">
            <div className="border-none text-center h-40  rounded-lg border-slate-800">
              <img id="cart-img" className="h-64  border-4 rounded-t-lg border-green-950 " src={car3}alt="" />
              <a className="text-xl font-bold text-amber-300" href=""><h4 className="py-4 rounded-b-lg hover:bg-amber-400 hover:text-black duration-300 bg-green-950"> <i className="ri-shopping-cart-2-line"></i>Add to cart</h4></a>
            </div>
            <div className="border-none h-40 text-center rounded-lg border-slate-800">
              <img id="cart-img" className="h-64 border-4 rounded-t-lg border-green-950 " src={car2}alt="" />
              <a className="text-xl font-bold text-amber-300" href=""><h4 className="py-4 rounded-b-lg hover:bg-amber-400 hover:text-black duration-300 bg-green-950"> <i className="ri-shopping-cart-2-line"></i>Add to cart</h4></a>
            </div>
          </div>
          </div>
          <div id="cart-totals" className="cart-total flex flex-col w-5/6  justify-center items-center">
            <div className=" w-11/12">
          <h2 className="bottom-0 py-4 pl-8  text-left text-2xl font-bold rounded-full bg-black text-amber-400">Cart&nbsp;totals</h2></div>
          <table  className="w-10/12 my-10  border-2 border-b">
          <tbody>
            <tr className="border-b text-left">
              <th className="py-4  font-bold pl-4 border-b-">Subtotal</th>
              <td id="subtotal" className=" p-2">$50</td>
            </tr>
            <tr className="text-left">
            <th className="py-4  font-bold pl-4 border-b-">Subtotal</th>
            <td id="subtotal" className="font-bold p-4 text-lg">$5076</td>
            </tr>
            </tbody>
          </table>
          <button onClick={handleCheckoutClick} className="border-2 px-10 bg-amber-400 mr-14 self-end w-5/6 mb-8 md:w-64  float-right py-3 hover:border-yellow-500  hover:text-yellow-500 hover:bg-white text-base font-bold  rounded-3xl ">
                  Proceed to Checkout
                </button>
          </div>
        </div>
    </div>
  )
}

export default Cart