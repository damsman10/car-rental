import { useEffect, useRef, useState } from "react";
import CheckoutTextBox from "../../reusables/checkoutreuseable/CheckoutTextBox";
import PagesHero from "../../reusables/PagesHero";
import { CheckoutLeft } from "./CheckoutLeft";
import { CheckoutRight } from "./CheckoutRight";
import { Link } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    streetAddress1: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://car-rental-okvm.onrender.com/billing-form";
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmY1NWQ2MGNjMzJkODQzZDJjNGQ1ZmMiLCJmaXJzdE5hbWUiOiJBZGUiLCJsYXN0TmFtZSI6Ik1pa2UiLCJlbWFpbCI6ImFkZWt1bmxlbWljaGFlbDEzMTlAZ21haWwuY29tIiwiaWF0IjoxNzI3Nzc3MTQ2LCJleHAiOjE3Mjc5NDk5NDZ9.i0fdTLdgH7hY30wId1r8jgbyMcaPjbKu2dr8uef4bp4",
        },
      });

      console.log("Billing details submitted successfully:", response.data);
      alert("Order placed successfully!");
    } catch (error) {
      if (error.response) {
        console.error("Error response", error.response.data);
        alert(
          "Error submitting billing details: " + error.response.data.message
        );
      } else if (error.request) {
        console.error("Error request", error.request);
        alert("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up request", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

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
            <CheckoutLeft formData={formData} handleChange={handleChange} />
          </div>

          <div
            ref={rightSideRef}
            className=" scrollbar-hidden w-full md:w-[43%] sticky md:top-[-40%] overflow-auto md:max-h-[150vh]"
          >
            <CheckoutRight handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
