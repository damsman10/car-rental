<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
import PagesHero from "../reusables/PagesHero"
import ProductCard from "../reusables/ProductCard";
import car1 from "../assets/car-1.png";
import car2 from "../assets/car-2.png";
import car3 from "../assets/car-3.png";
import cartIcon from "../assets/cart-icon.png";
import p2 from "../assets/p-2.png";

const Rent = () => {
  return (
    <div>
      <PagesHero />

      <div className=" flex border w=60vw mx-5 justify-center rounded-xl py-1 my-3 bg-[#FAFAFA]">
        <p>Showing 1-6 of 8 results</p>
      </div>

      <div className="flex justify-end">
        {/* <label for="products" className=" ">16 Products</label> */}
        
        {/* <label for="popular">Popular</label> */}
        <select name="product-number" id="cars"  className=" flex border w=80% justify-center rounded-xl py-2 px-2 mx-2">
          <option>Popular</option>
          <option>Featured</option>
          <option>Top Rated</option>
          <option>Sort by latest</option>
          <option>Sort by oldest</option>
          <option>Price low to high</option>
          <option>Price high to low</option>
          <option>Highest Discount</option>
          <option>Lowest Discount</option>
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
        </select>

        <select name="product-number" id="cars" className=" flex border w=80% justify-center rounded-xl py-2 mx-2">
          <option>16 Products</option>
          <option>32 Products</option>
          <option>48 Products</option>
          <option>64 Products</option>
          <option>128 Products</option>
        </select>

      </div> 

      <input type="submit" />

      <div className="flex justify-between justify-around flex-wrap ">
      <ProductCard 
        carpic={car1}
        percent="25%"
        price="$299"
        discount="$399"
        type="discount"
      />

      <ProductCard 
        carpic={car2}
        price="$259"
      />

      <ProductCard 
        carpic={car3}
        price="$167"
      />
      </div>
      

      <div className="inner relative top-[6rem] left-[35%] w-16 h-16 md:w-24 md:h-24 rounded-[50%] bg-[#FFCA08] flex items-center justify-center">
         <button className="w-10" >7</button>
       </div>

       {/* <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4">
                2
              </button> */}
        
    </div>
  )
}

export default Rent