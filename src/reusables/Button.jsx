

const Button = (props) => {
  return (
    <div>
        <button className='px-8 font-bold rounded-3xl text-black text-[1.1rem] p-3 italic bg-[#FFCA08] hover:bg-transparent hover:text-[#FFCA08] hover:border-2 border-[#FFCA08]' style={{fontSize: `${props.size}`, fontStyle: `${props.style}`, display: `${props.display}`}}>{props.text}</button>
    </div>
  )
}

export default Button