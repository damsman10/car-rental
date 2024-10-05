import Input from "../../reusables/checkoutreuseable/Input";
import { useEffect, useState } from "react";
import axios from "axios";

export const CheckoutLeft = ({ formData, handleChange }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get(
          "https://car-rental-okvm.onrender.com/countries"
        );
        setCountries(response.data); // Assuming the response is an array of country objects
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    getCountries();
  }, []);

  const handleCountryChange = async (event) => {
    const selectedCountryCode = event.target.value; // Get the selected country code
    handleChange(event); // Update form data

    setStates([]);

    try {
      const response = await axios.get(
        `https://car-rental-okvm.onrender.com/countries/${selectedCountryCode}/states`
      );
      setStates(response.data); // Assuming the response is an array of state objects
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  return (
    <div className="billingDetails pb-[2rem] w-[100%]">
      <h1 className="bg-[#1c1601] text-[#ffca06] font-bold sm:text-[1.3rem] h-[9vh] sm:justify-start  flex items-center justify-center  rounded-full  px-[2rem] ">
        Billing details
      </h1>
      <div className="flex flex-wrap w-full m-auto">
        <div className="sm:flex w-full sm:justify-between ">
          <Input
            htmlFor="firstName"
            label="First name"
            isRequired={true}
            value={formData.firstName}
            onChange={handleChange}
            width="sm:w-[47%]"
          />
          <Input
            htmlFor="lastName"
            label="Last name"
            isRequired={true}
            value={formData.lastName}
            onChange={handleChange}
            width="sm:w-[47%]"
          />
        </div>
        <Input
          htmlFor="companyName"
          label="Company name (optional)"
          isRequired={false}
          value={formData.companyName}
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
            onChange={handleCountryChange}
            required
            className="border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[.5rem] bg-transparent"
          >
            {countries.map((country) => (
              <option className="p-2 " key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <Input
          htmlFor="streetAddress"
          label="Street address"
          placeholder="House number and street name"
          isRequired={true}
          value={formData.streetAddress}
          onChange={handleChange}
        />
        <Input
          htmlFor="streetAddress1"
          placeholder="Apartment, suite, unit, etc. (optional)"
          required={false}
          value={formData.streetAddress1}
          onChange={handleChange}
        />
        <Input
          htmlFor="city"
          label="Town/City"
          isRequired={true}
          value={formData.city}
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
            {states.map((state) => (
              <option className="p-2 " key={state.value} value={state.value}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <Input
          htmlFor="zipCode"
          label="Zipcode"
          type="number"
          isRequired={true}
          value={formData.zipCode}
          onChange={handleChange}
        />
        <Input
          htmlFor="phone"
          label="Phone"
          type="phone"
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
            name="additionalInformation"
            id="notes"
            value={formData.additionalInformation}
            onChange={handleChange}
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="border p-[1rem] border-[#dcdcdc] text-[#595959] rounded-3xl h-[10rem] bg-transparent"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
