import { useEffect, useRef } from "react";
import CheckoutTextBox from "../../reusables/checkoutreuseable/CheckoutTextBox";
import PagesHero from "../../reusables/PagesHero";
import { CheckoutLeft } from "./CheckoutLeft";
import { CheckoutRight } from "./CheckoutRight";
import { Link } from "react-router-dom";

const Checkout = () => {
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rightSideRef.current && leftSideRef.current) {
        const rightElement = rightSideRef.current;
        const leftElement = leftSideRef.current;

        // Sync the scroll position of the left and right sections with the main page scroll
        const scrollRatio =
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight);
        const maxLeftScrollTop =
          leftElement.scrollHeight - leftElement.clientHeight;
        const maxRightScrollTop =
          rightElement.scrollHeight - rightElement.clientHeight;

        leftElement.scrollTop = scrollRatio * maxLeftScrollTop;
        rightElement.scrollTop =
          scrollRatio * (rightElement.scrollHeight - rightElement.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="checkoutPage relative min-h-screen bg-[#ffffff]">
      <PagesHero />
      <div id="shopping-cart" className=" mb-20 ">
        <ul className="list-none flex items-center justify-center gap-10 mt-28 text-sm md:text-2xl border-red-400 lg:text-3xl">
          <Link to="/cart">
            <li className=" flex items-center gap-2 hover:text-[#FFCA08] opacity-25 ">
              <span className="bg-yellow-400 text-sm px-2 py-1 rounded-full">
                1
              </span>{" "}
              Shopping Cart
            </li>
          </Link>
          <i className="ri-arrow-right-line opacity-25"></i>

          <li className=" flex items-center gap-2 ">
            <span className="bg-yellow-400 text-sm  px-2 py-1 rounded-full">
              2
            </span>{" "}
            Checkout Details
          </li>

          <i className="ri-arrow-right-line opacity-25"></i>
          <Link to="/orderComplete">
            <li className=" flex items-center gap-2 opacity-25">
              <span className="bg-yellow-400 text-sm px-2 py-1 rounded-full">
                3
              </span>
              Order Complete
            </li>
          </Link>
        </ul>
      </div>
      <div className="m-[2rem]">
        <CheckoutTextBox
          type="link"
          paragraph="Have a coupon?"
          text="Click here to enter your code."
        />
        <div className="flex justify-between sticky pb-[7rem] my-[2rem] top-0 flex-col md:flex-row ">
          <div
            ref={leftSideRef}
            className="billingDetails  scrollbar-hidden w-full md:w-[53%] sticky md:top-0 overflow-auto"
          >
            <CheckoutLeft />
          </div>

          <div
            ref={rightSideRef}
            className=" scrollbar-hidden w-full md:w-[43%] sticky md:top-[-40%] overflow-auto md:max-h-[150vh]"
          >
            <CheckoutRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
