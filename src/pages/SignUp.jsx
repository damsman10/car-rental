import { useState } from "react"
import logo from "../assets/car-rental-logo.png";
import { Link } from "react-router-dom";

const Signup = () =>  {
const [email, setEmail] = useState([""])
const [firstname, setFirstname] =useState([""])
const [lastname, setLastname] =useState([""])
const [password, setPassword] =useState([""])
const [confirmPassword, setConfirmPassword] =useState([""])


const handleSubmit = (e ) =>{
e.preventDefault()
console.log('Email', email);
console.log('firstname',firstname);
console.log('lastname',lastname);
console.log('password',password);
console.log('confirmPassword',confirmPassword);


setEmail('')
setFirstname('')
setLastname('')
setPassword('')
setConfirmPassword('')

}
   return (
        
        <div  className="block justify-center items-center sm:p-20 lg:flex md:flex sm:flex h-full sm:bg-gradient-to-r from-yellow-500 to-yellow-900">
     <div>
    <div className="bg-gradient-to-b from-yellow-500 to-white w-full lg:w-full bg-blue-100  shadow-white h-full p-8 rounded-2xl ">
  <div className="flex flex-col gap-3"> 
<Link to="/">
  <img  className=" mt-2 w-[8rem]"  src={logo} alt="car rental"></img>
</Link>
  <h2 className=" text-2xl  font-bold  text-black-500 ">Sign up</h2>
  <p className="text-gray-500 mb-6">Create Car Rental account</p>
   </div>

<div className="flex flex-col w  items-center space-y-2"> 
  <div className="flex flex-col gap-2 w-full">  
    <label className="block text-left text-sm font-medium text-gray-700" htmlFor="email">Email</label>  
 <input
 type="email"
 id="email"
 onChange={(e => setEmail(e.target.value)) }
 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
 placeholder="Email"/> 
</div>

 <div className="justify-between items-center gap-2 py-2 flex w-full "> 
    <div className="flex flex-col gap-2">
       <label htmlFor="Fname" className="block text-left text-sm font-medium text-gray-700">First name</label>
    <input
    id="fname"
    onChange={(e => setFirstname(e.target.value)) }
     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
      type="Fname"  
       placeholder="First name"/>
       </div>
    
   
    <div    className="flex flex-col gap-2">
    <label htmlFor="lname" className="block text-left text-sm font-medium text-gray-700">Last name</label>
    <input
     id="lname"
     onChange={(e => setLastname(e.target.value)) }
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
      type="Last name" 
      placeholder="Last name"/>
      </div>
 </div>   

<div className="text-left w-full "><p>Enter your first and last name as they appear on your government-issued ID.</p></div>

<div className="flex flex-col gap-4 w-full my-3">
<div className="flex flex-col gap-2">
<label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
<input 
 id="password"
 onChange={(e => setPassword(e.target.value)) }
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
   type="password"
    placeholder="Enter Password"/>
</div>

<div className="flex flex-col gap-2">
<label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Confirm Password</label>
  <input 
   id="confirm password"
   onChange={(e => setConfirmPassword(e.target.value)) }
   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 "
    type="confirm password" 
      placeholder="Confirm Password"/>
   </div>
    </div>

<div className="w-full">
<button 
 id=""
 onClick={handleSubmit}
  className="border-2 w-full rounded-lg  text-white bg-yellow-800  text-lg p-2">Create Car-rental account</button>
  </div>

<div className="flex  items-center justify-between mt-6 gap-4 rent flex-col lg:flex-row " >
 <small className=" flex justify-between gap-1 ">
  <p className="text">Already have a Car Rental account? {""} <a href="/login" className="text-sm text-yellow-600">Log in!</a> {""}  </p>
   </small>
     </div>

 <p className="mt-10 text-left text-center">By proceeding, you agree to the<a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></p>


 <div className="mt-8 flex justify-between w-[200px] text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
    </div>
  </div> 
 </div>
</div>
    )
}
export default Signup

