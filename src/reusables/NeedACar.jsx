import mail from '../assets/mail-footer.png'

const NeedACar = () => {
  return (
    <div className="w-[75%] bg-[#FFCA08] m-auto flex items-center justify-start gap-10 p-[3.5rem] rounded-lg 2xl:pl-24">
        <div className="icon">
            <img src={mail} alt="" className='w-[7rem]'/>
        </div>
        <div className="message">
            <h1 className="text-[2.2rem] italic text-[#333333]">Need a Car? Contact us now with <span className="font-bold underline">+123 (456) 789 </span></h1>

        </div>
    </div>
  )
}

export default NeedACar