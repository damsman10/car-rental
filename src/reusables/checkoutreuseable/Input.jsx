const Input = ({
  htmlFor,
  label,
  type = "text",
  value,
  placeholder,
  isRequired,
  onChange,
  width = "md:w-full",
}) => {
  return (
    <div
      className={`${width} checkoutInput text-[#595959] w-full flex flex-col my-[1rem]`}
    >
      <label htmlFor={htmlFor} className="my-[1rem]">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={htmlFor}
        value={value}
        placeholder={placeholder}
        id={htmlFor}
        onChange={onChange}
        required={isRequired}
        className={`  border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[1rem] focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent m-auto focus:border focus:border-[#FFCA08] active:bg-red-100 w-full`}
      />
    </div>
  );
};

export default Input;
