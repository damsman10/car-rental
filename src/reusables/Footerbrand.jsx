import logo from '../assets/logo-footer.png'

const Footerbrand = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
        <div className="top">
            <img src={logo} alt="" className='w-[20rem]'/>
        </div>
        <div className="bottom">
            <p className='text-[#a7aba1] italic text-[0.8rem] text-center'>Copyright © 2024 Car Rentals. All Rights Reserved. Powered by LikeMinded Devs</p>
        </div>
    </div>
  )
}

export default Footerbrand