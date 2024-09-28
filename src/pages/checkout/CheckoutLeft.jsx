import Input from "../../reusables/checkoutreuseable/Input";
import { useState } from "react";

const countries = [
  { value: "US", label: "United States (US)" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  
];
const state = [
  { value: "US", label: "United States (US)" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  
];
export const CheckoutLeft = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    country: "",
    streetAddress1: "",
    streetAddress2: "",
    town: "",
    state: "",
    zicode: "",
    phone: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="billingDetails pb-[2rem] w-[100%]">
      <h1 className="bg-[#1c1601] text-[#ffca06] font-bold sm:text-[1.3rem] h-[9vh] sm:justify-start  flex items-center justify-center  rounded-full  px-[2rem] ">
        Billing details
      </h1>
      <div className="flex flex-wrap w-full m-auto">
        <div className="sm:flex w-full sm:justify-between ">
          <Input
            htmlFor="firstname"
            label="First name"
            isRequired={true}
            value={formData.firstname}
            onChange={handleChange}
            width="sm:w-[47%]"
          />
          <Input
            htmlFor="lastname"
            label="Last name"
            isRequired={true}
            value={formData.lastname}
            onChange={handleChange}
            width="sm:w-[47%]"
          />
        </div>
        <Input
          htmlFor="companyname"
          label="Company name (optional)"
          isRequired={false}
          value={formData.companyname}
          onChange={handleChange}
        />
        
        <div className="w-full flex flex-col my-[1rem]">
          <label htmlFor="country" className="my-[1rem]">
            Country/Region
            <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[.5rem] bg-transparent"
          >
            {countries.map((country) => (
              <option className="p-2 " key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>


        <Input
          htmlFor="streetAddress1"
          label="Street address"
          placeholder="House number and street name"
          isRequired={true}
          value={formData.streetAddress1}
          onChange={handleChange}
        />
        <Input
          htmlFor="streetAddress2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          required={false}
          value={formData.streetAddress2}
          onChange={handleChange}
        />
        <Input
          htmlFor="town"
          label="Town/City"
          isRequired={true}
          value={formData.town}
          onChange={handleChange}
        />
       
    
         <div className="w-full flex flex-col my-[1rem]">
          <label htmlFor="state" className="my-[1rem]">
            state
            <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[.5rem] bg-transparent"
          >
            {countries.map((state) => (
              <option className="p-2 " key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>
        <Input
          htmlFor="zipcode"
          label="Zipcode"
          type="number"
          isRequired={true}
          value={formData.zipcode}
          onChange={handleChange}
        />
        <Input
          htmlFor="phone"
          label="Phone"
          type="number"
          isRequired={true}
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          htmlFor="email"
          label="Email address"
          type="email"
          isRequired={true}
          value={formData.email}
          onChange={handleChange}
        />
        <div className="w-full flex flex-col">
          <h3 className="font-bold text-[1.4rem] my-[1rem]">
            Additional information
          </h3>
          <hr className="h-3 w-full " />
          <label htmlFor="notes" className="my-[1rem] text-[#595959]">
            Order notes(optional)
          </label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="border p-[1rem] border-[#dcdcdc] text-[#595959] rounded-3xl h-[10rem] bg-transparent"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
