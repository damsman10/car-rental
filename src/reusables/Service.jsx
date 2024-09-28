const Service = (props) => {
  return (
    <div className="flex items-center justify-center mt-[8rem] md:mt-[4rem] flex-col font-light">
      <p className="py-1 px-3 md:px-12 rounded-3xl text-[0.7rem] md:text-[1.5rem] italic mb-4" style={{backgroundColor: `${props.titlebg}`, color: "#575757"}}>{props.title}</p>
      <p
        className="italic text-[1.2rem] md:text-[2.7rem] font-bold"
        style={{ color: `${props.color}` }}
        dangerouslySetInnerHTML={{
          __html: `${props.service} <span class="text-[#FFCA08] underline font-bold">${props.span}</span>`,
        }}
      />
    </div>
  );
};

export default Service;
