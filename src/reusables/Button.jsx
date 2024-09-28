

const Button = (props) => {
  return (
    <div>
        <button className='px-8 h-12 font-bold rounded-3xl text-black text-[1.1rem] p-3 italic bg-[#FFCA08]' style={{fontSize: `${props.size}`, fontStyle: `${props.style}`}}>{props.text}</button>
    </div>
  )
}

export default Button