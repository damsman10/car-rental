

const Stat = (props) => {
  return (
    <div>
        <div className="frame h-[14rem] w-[16rem] md:w-[20rem] bg-[#211a01] hover:bg-white rounded-lg">
            <h1 className="text-[5rem] mt-6 flex justify-center items-center italic font-bold text-[#FFCA08] hover:text-black pt-10">{props.stat} <span className=" not-italic">{props.none}</span></h1>
            <div className="inner relative top-10 bg-white w-[70%] m-auto text-center rounded-3xl hover:bg-[#FFCA08]">
                <p className="italic p-2 font-semibold text-[1.2rem]">{props.inner}</p>
            </div>
        </div>
    </div>
  )
}

export default Stat