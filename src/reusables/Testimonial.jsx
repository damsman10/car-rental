import jenny from '../assets/Jennifer.jpg'
import TestimonialService from "./TestimonialService"


const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-16 w-4/5 m-auto mt-32 md:mt-0">
        <div className="left w-[90%] md:w-[50%] px-4 m-auto md:m-0">
            <TestimonialService
            titlebg = "#F1F1F1"
            titlecolor = "#575757"
            title = "One of our Testimonials"
            service = "See what said our happy"
            span = "customers"
            />
            
        </div>
        <div className="right w-[100%] md:w-[45%] flex flex-col">
            <div className="top w-[90%] rounded-lg bg-[#1C1601] p-2 md:p-10 py-8 m-auto">
                <p className="text-center text-[1rem] md:text-[1.25rem] text-white w-[90%] m-auto">"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."</p>
            </div>
            <div className="bottom  w-[90%] flex flex-col md:flex-row justify-start gap-4  md:mt-2">
                <div className="leftb w-20 h-20 rounded-[50%] ml-20 bg-cover bg-center relative -top-8" style={{backgroundImage: `url(${jenny})`}}>
                    {/* <img src= {jenny} alt="" /> */}
                </div>
                <div className="rightb relative -top-12  text-center">
                    <div className="top">
                        <h1 className="font-bold text-[1.1rem]">Jennifer Olayiwola</h1>
                    </div>
                    <div className="bottom">
                        <p className="font-light">Makeup Artist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial