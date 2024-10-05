

const TestimonialService = (props) => {
    return (
      <div className="flex justify-center flex-col font-light">
        <p className="py-2 w-full md:w-[80%] px-3 md:px-12 rounded-3xl text-[0.9rem] md:text-[1.3rem] italic mb-8" style={{backgroundColor: `${props.titlebg}`, color: `${props.titlecolor}`}}>{props.title}</p>
        <p
        className="italic text-[1.2rem] md:text-[2.7rem] font-bold pr-4 text-center md:text-left"
        style={{ color: `${props.color}` }}
        dangerouslySetInnerHTML={{
          __html: `${props.service} <span class="text-[#FFCA08] underline font-bold">${props.span}</span>`,
        }}
        />


        
      </div>
    );
  };

export default TestimonialService