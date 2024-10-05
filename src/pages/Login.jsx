import carlogo from "../assets/car-rental-logo.png";
import {useState} from 'react'

const Login = () => {
     const [email, setEmail] = useState(['']);
     const [password, setPassword] =useState(['']);

     const handleSubmit = (e) =>{
      e.preventDefault();
      console.log('Email:', email)
      console.log('password:', password)

      setEmail("")
      setPassword("")
     };

  return (
    <div className="flex justify-center items-center min-h-screen sm:bg-gradient-to-r from-yellow-500 to-yellow-900">
      <div className= "bg-gradient-to-b from-yellow-500 to-white p-8 rounded-2xl shadow-lg w-full sm:w-[500px] sm:mt-[5rem]  text-center">
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src={carlogo} alt="car logo" className="mx-auto w-[8rem]" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Log in</h2>
          <p className="text-gray-500 mb-6">Continue to Car Rental account</p>
        </div>
        <form className="space-y-4">
          <label
            htmlFor="email"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e => setEmail(e.target.value)) }
            id="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <label htmlFor="password"  className="block text-left text-sm font-medium text-gray-700"> Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e => setPassword(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your password"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-900"
          >
            Continue with email
          </button>
        </form>

       
        <div className="my-6 flex items-center justify-center">
          <div className="border-t w-[40%] border-yellow-600 "></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t w-[40%] border-yellow-600"></div>
        </div>

        <div className="mt-6">
          <p className="text-sm">
            New to Car Rentals?{' '}
            <a href="#" className="text-yellow-600 hover:underline">
              Get started
            </a>
          </p>
        </div>

        
        <div className="mt-8 flex justify-between w-[40%] text-sm text-gray-500">
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
  );
};

export default Login;
