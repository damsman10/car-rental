import logo from "../assets/car-rental-logo.png"


const Signup = () =>{

    return (
        <div  className="bg-yellow-200  block justify-center items-center sm:p-20 lg:flex md:flex sm:flex">
     <div>
    <div className=" w-full lg:w-full bg-blue-100  shadow-white h-full p-5 ">

<div className="flex flex-col gap-3">  
<img  className="h-8  w-44"  src={logo} alt=""></img>
<h2 className=" text-2xl  font-bold text-black-500 ">Create a Car Rental account</h2>
</div>

 <div className="flex flex-col w-full  items-center mt-8 ">
<div className="Email  w-full  ">  
<label htmlFor="">Email</label><br/>   
<input className=" border-4 w-full rounded-lg p-2   bg-white" type="Email"  placeholder="Email"/> 
</div>

 <div className="   justify-between items-center gap-2 py-2 flex w-full "> 
    <div className="">
       <label htmlFor="Fname">First name</label><br/>
    <input  className="border-4   rounded-lg p-2 bg-white w-full"  type="Fname"  placeholder="First name" />
   </div>
    
    <div className="">
    <label htmlFor="lname">Last name</label><br/>
    <input  className="border-4   rounded-lg p-2 bg-white w-full"  type="Last name"  placeholder="Last name"/>
    </div>
 </div>   
<div className="text-left w-full "> <p>Enter your first and last name as they appear on your <br/>  government-issued ID.</p></div>

<div className=" w-full my-3">

<div>
<label htmlFor="password">Password</label><br/>
<input className="border-4  rounded-lg w-full mb-2 p-2 bg-white" type="password" placeholder="Enter Password"/><br/>
</div>

<div>
<label htmlFor="password">Confirnm Password</label><br/>
<input className="border-4  rounded-lg w-full p-2 bg-white " type="confirm password" placeholder="Confirm Password"/>
</div>
</div>

<div className="w-full">
<button  id="" className="border-2 w-full rounded-lg  bg-black text-yellow-200  text-lg py-3">Create a Car-rent account</button>
</div>

<div className="flex  items-center justify-between mt-6 gap-4 rent flex-col lg:flex-row " >

<small className=" flex justify-between gap-1 ">
<p className="text">Already have a Car Rental account? <button id=""  className="text-sm text-yellow-600">Log in</button> </p>
</small>
 </div>

 <p className="mt-10 text-left">By proceeding, you agree to the <span>Terms and Conditions</span> <br/>  and<span> Privacy Policy</span>

 </p>
</div>
</div>
</div>
</div>
    )
}
export default Signup
