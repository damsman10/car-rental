const Input = ({
  htmlFor,
  label,
  type = "text",
  name,
  value,
  placeholder,
  isRequired,
  onChange,
  width = "md:w-full",
  
}) => {
  return (
    <div className={`${width} checkoutInput text-[#595959] w-full flex flex-col my-[1rem]`}>
      <label htmlFor={htmlFor} className="my-[1rem]">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={ htmlFor}
        onChange={onChange}
        required={isRequired}
        className={`  border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[1rem] bg-transparent m-auto focus:border focus:border-[#FFCA08] active:bg-red-100 w-full`}
      />
    </div>
  );
};

export default Input;
